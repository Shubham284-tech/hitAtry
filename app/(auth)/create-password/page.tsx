import EntireLayout from "@/components/layoutStructuring/EntireLayout";
import React from "react";

const CreatePassword = () => {
  return (
    <EntireLayout
      page="confirmPassword"
      heading="Create Password"
      btnTxt="Confirm Password"
      routingTo="Reset Now"
      routingText="Forgot your password?"
      redirect="/activate-account"
    />
  );
};

export default CreatePassword;
