"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { difficultyArray } from "@/constants/Constants";
import { redirect, useRouter } from "next/navigation";

const Difficulty = ({}) => {
  const router = useRouter();

  const [diffLevel, setDiffLevel] = useState("");
  const linkClasses = "text-blue-100 underline hover:text-blue-100";
  return (
    <div className="relative min-h-screen min-w-full bg-back flex flex-1 flex-col mx-auto custom-scrollbar">
      <div className="sm:mt-10 mt-10 absolute left-1/2 transform -translate-x-1/2">
        <Image src="/Logo.png" height={50} width={53} alt="Logo" />{" "}
      </div>
      <div className="lg:w-[840px] md:w-[800px] flex m-auto flex-col gap-5 p-10 pt-20 mt-10">
        <h2 className="heading-sm text-center sm:text-left text-black-400">
          You are selling{" "}
          <Link href="/products/crm-software" className={linkClasses}>
            CRM Software
          </Link>{" "}
          to a{" "}
          <Link href="/buyers/condo-board" className={linkClasses}>
            Condo Board,
          </Link>{" "}
          in the{" "}
          <Link href="/industries/energy" className={linkClasses}>
            Energy Industry.
          </Link>{" "}
          The buyer is out stationed and attending this call on a special
          request from his hotel room.
        </h2>

        <h1 className="heading text-center sm:text-left text-black-400">
          Choose a Difficulty Level
        </h1>

        <div className="flex flex-wrap justify-center sm:justify-between gap-5 w-full">
          {difficultyArray.map(
            (value: { src: string; text: string }, index: number) => (
              <div
                key={index}
                className={`bg-white flex-grow basis-[200px] max-w-[250px] min-h-[200px] rounded-2xl p-3 ${diffLevel === value.text ? "border-2 border-blue-100" : ""}`}
                onClick={() => setDiffLevel(value.text)}
              >
                <div
                  key={index}
                  className={`flex-center flex-col min-h-full p-2`}
                >
                  <Image src={value.src} alt="fv" height={70} width={70} />
                  <h2 className="text-black-300 text-normal1">{value.text}</h2>
                </div>
              </div>
            )
          )}
        </div>
        <div className="flex-between mt-10">
          <Link href="/">
            <Image
              src="/back.png"
              alt="fv"
              className="object-contain"
              height={56}
              width={56}
            />
          </Link>

          <Button
            disabled={diffLevel.length === 0}
            onClick={() => router.push("/recording")}
            className="bg-blue-200 w-[120px] md:w-[230px] h-[56px] rounded-4xl"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Difficulty;
