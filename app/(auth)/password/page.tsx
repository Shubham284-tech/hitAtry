import EntireLayout from "@/components/layoutStructuring/EntireLayout";

const Password = () => {
  return (
    <EntireLayout
      page="password"
      heading="Enter Password"
      btnTxt="Confirm Password"
      routingTo="Reset Now"
      routingText="Forgot your password?"
    />
  );
};

export default Password;
