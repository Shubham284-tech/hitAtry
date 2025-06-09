import BasicStructure from "@/components/root-comps/headingAndImage";
import React from "react";

const Confirmation = () => {
  return (
    <BasicStructure
      heading="Thanks for choosing Pitch Perfect AI!"
      subHeading=" You can invite members to your team, the team members will be
            notified"
      imageSrc="/check.png"
      btnTxt="Let’s Get Started"
    />
  );
};

export default Confirmation;
