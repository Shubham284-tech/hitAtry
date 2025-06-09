"use client";
import { useRef } from "react";
import { io, Socket } from "socket.io-client";

export const useChatSocket = (
  onGptReply: (msg: string) => void,
  onTranscription?: (text: string) => void
) => {
  const socketRef = useRef<Socket | null>(null);
  const audioQueue = useRef<string[]>([]);
  const isPlaying = useRef(false);

  const initSocket = () => {
    const socket = io(process.env.NEXT_PUBLIC_API_BASE_URL);
    socketRef.current = socket;

    socket.on("connect", () => {});

    socket.on("gpt_reply", (msg) => {
      onGptReply(msg);
    });

    if (onTranscription) {
      socket.on("transcription", onTranscription);
    }

    socket.on("gpt_audio", (base64Audio: string) => {
      audioQueue.current.push(base64Audio);
      if (!isPlaying.current) playNextAudio();
    });

    socket.on("disconnect", () => {
      console.log("🔌 Disconnected from server");
      socketRef.current = null;
    });
  };

  const playNextAudio = () => {
    const chunk = audioQueue.current.shift();
    if (!chunk) {
      isPlaying.current = false;
      return;
    }

    isPlaying.current = true;

    const audio = new Audio(`data:audio/mp3;base64,${chunk}`);
    audio.onended = () => {
      playNextAudio();
    };
    audio.onerror = () => {
      console.error("❌ Audio chunk error");
      playNextAudio();
    };
    audio.play().catch((err) => {
      console.error("Autoplay failed:", err);
      playNextAudio(); // skip problematic chunk
    });
  };
  return {
    sendUserMessage: (msg: string) =>
      socketRef.current?.emit("user_message", msg),
    startTranscription: () => {
      if (!socketRef.current) {
        initSocket();
        setTimeout(() => {
          socketRef.current?.emit("start_transcription");
        }, 400);
      } else {
        socketRef.current.emit("start_transcription");
      }
    },
    sendAudioChunk: (chunk: ArrayBuffer) =>
      socketRef.current?.emit("audio_chunk", chunk),
    stopTranscription: () => {
      socketRef.current?.emit("stop_transcription");
    },
    startSession: (data: any) => socketRef.current?.emit("start_session", data),
  };
};
