"use client";
import BasicStructure from "@/components/root-comps/headingAndImage";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const ActivateAccount = () => {
  const searchParams = useSearchParams();
  useEffect(() => {
    const params = Object.fromEntries(searchParams.entries());
    console.log("Query Params:", params);
  }, [searchParams]);
  return (
    <BasicStructure
      heading="Oops! Something went wrong"
      subHeading="The verification link may have expired or the email is incorrect. Please try again or request a new link."
      imageSrc="/Warning.png"
      btnTxt="Request a new link"
    />
  );
};

export default ActivateAccount;
