import EntireLayout from "@/components/layoutStructuring/EntireLayout";

const AboutYou = () => {
  return (
    <EntireLayout
      page="aboutYou"
      heading="Tell us about you"
      subHeading="This is how you’ll show up in your Pitch Perfect profile"
      btnTxt="Continue"
      routingTo="Reset Now"
      routingText="Forgot your password?"
    />
  );
};

export default AboutYou;
