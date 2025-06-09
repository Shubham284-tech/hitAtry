"use client";
import Choose from "@/components/root-comps/Choose";
import { b2cMotivateArray } from "@/constants/Constants";

import React, { useState } from "react";

const Industry = () => {
  const [selected, setSelected] = useState("");
  return (
    <Choose
      heading="What motivates your buyer?"
      arr={b2cMotivateArray}
      setSelected={setSelected}
      selected={selected}
      link="/"
      secondaryHeading="Popular motivations & pain points"
      btnText="Continue"
      randomBtn={true}
      showSkip
      redirect="/difficulty-level"
    />
  );
};

export default Industry;
