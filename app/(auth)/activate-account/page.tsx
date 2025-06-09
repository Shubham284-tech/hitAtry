"use client";
import BasicStructure from "@/components/root-comps/headingAndImage";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const ActivateAccount = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const params = Object.fromEntries(searchParams.entries());
    console.log("Query Params:", params);
  }, [searchParams]);

  useEffect(() => {
    console.log("hello");
    const timeout = setTimeout(() => {
      router.push("/confirmation");
    }, 3000);

    return () => clearTimeout(timeout); // cleanup if component unmounts
  }, []);
  return (
    <BasicStructure
      heading="Verification link sent!"
      subHeading="We've sent a verification link to your email. Please click the link to verify your account."
      imageSrc="/mail.png"
      btnTxt="Let’s Get Started"
      btn={false}
    />
  );
};

export default ActivateAccount;
