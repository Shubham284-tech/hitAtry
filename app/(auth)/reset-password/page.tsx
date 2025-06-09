import EntireLayout from "@/components/layoutStructuring/EntireLayout";

const ResetPassword = () => {
  return (
    <EntireLayout
      page="email"
      heading="Reset Password"
      btnTxt="Confirm"
      routingTo="SignUp"
      routingText="Don’t have an account?"
      redirect="/otp-verification"
    />
  );
};

export default ResetPassword;
