"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useCallback, useRef, useState } from "react";
import { useAudioRecorder } from "../../../hooks/useAudioRecorder";
import { useChatSocket } from "@/hooks/useChatSocket";
const page = () => {
  const [countdown, setCountdown] = useState<number | null>(null);
  const [disableStartPitching, setDisableStartPitching] = useState(false);
  const [messages, setMessages] = useState<
    { sender: string; text: string; audio?: string }[]
  >([]);
  const lastPlayedIndex = useRef<number | null>(null);

  const handleGptReply = useCallback((reply: string) => {
    setMessages((prev) => {
      const updated = [...prev, { sender: "gpt", text: reply }];
      return updated;
    });
  }, []);
  const handleTranscription = useCallback((text: string) => {
    setMessages((prev) => [...prev, { sender: "user", text }]);
    sendUserMessage(text);
  }, []);

  const handleStartRecording = async () => {
    setDisableStartPitching(true);
    let count = 3;
    setCountdown(count);

    const countdownInterval = setInterval(() => {
      count--;
      if (count > 0 && count !== null) {
        setCountdown(count);
      } else {
        clearInterval(countdownInterval);
        setCountdown(null);
        rawStartRecording(); // start recording after countdown ends
        setDisableStartPitching(false);
      }
    }, 1000);

    setTimeout(async () => {
      startSession({
        industry: "technology",
        product: "Laptop",
        targetBuyer: "b2b",
        b2b: {
          persona: "CTO",
          industry: "Software company",
          difficulty: "easy",
          other_info:
            "You are trying to sell 1000 laptops to an engineering college",
        },
        b2c: {
          customer: "First-Time Buyer",
          age: "20-30",
          gender: "female",
          motivation: "Quality & Durability",
          difficulty: "low",
          income: "high",
        },
      });
    }, 2000);
    startTranscription();
  };

  const handleStopRecording = () => {
    rawStopRecording();
    stopTranscription();
  };

  const {
    sendUserMessage,
    startTranscription,
    sendAudioChunk,
    stopTranscription,
    startSession,
  } = useChatSocket(handleGptReply, handleTranscription);
  const {
    recording,
    startRecording: rawStartRecording,
    stopRecording: rawStopRecording,
  } = useAudioRecorder(sendAudioChunk);

  return (
    <div className="relative min-h-screen min-w-full bg-back flex flex-1 flex-col mx-auto custom-scrollbar">
      <div className="sm:mt-10 mt-10 absolute left-1/2 transform -translate-x-1/2">
        <Image src="/Logo.png" height={50} width={53} alt="Logo" />{" "}
      </div>

      <div className="lg:w-[840px] md:w-[800px] flex m-auto flex-col gap-5 p-10 py-20 my-10 ">
        <h1 className="h1-medium text-center text-blue-200">Hello Sana!</h1>
        <h2 className="h2-medium text-center mb-10">
          You are all set to make the pitch
        </h2>
        <div className="h-[200px] flex items-center justify-center mb-10">
          {countdown !== null ? (
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl text-green-500 animate-fade font-bold z-50">
              {countdown === 1 ? "Start" : countdown}
            </div>
          ) : (
            <Image
              alt="mic"
              src="/mic.png"
              height={200}
              width={200}
              className="mx-auto mb-10"
            />
          )}
        </div>

        <div className="flex flex-col items-center gap-4 mt-10">
          {!recording ? (
            <Button
              onClick={handleStartRecording}
              className="max-sm:w-[200px] sm:w-[400px] mx-auto"
              disabled={disableStartPitching}
            >
              🎙️ Start Pitching
            </Button>
          ) : (
            <div className="flex-center gap-10 max-w-[600px] mx-auto">
              <Button
                className="max-sm:w-[150px] sm:w-[200px] h-[48px] bg-red-500"
                onClick={handleStopRecording}
              >
                🛑 Stop Recording
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
