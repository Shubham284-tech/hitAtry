import EntireLayout from "@/components/layoutStructuring/EntireLayout";

import React from "react";

const OtpVarification = () => {
  return (
    <EntireLayout
      page="otp"
      heading="Reset Password"
      btnTxt="Reset Your Password"
      routingTo="SignUp"
      routingText="Don’t have an account?"
      redirect="/activate-account"
    />
  );
};

export default OtpVarification;
