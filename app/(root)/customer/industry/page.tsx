"use client";
import Choose from "@/components/root-comps/Choose";
import { customerIndustryArray } from "@/constants/Constants";

import React, { useState } from "react";

const Industry = () => {
  const [selected, setSelected] = useState("");
  return (
    <Choose
      heading="What industry are they in?"
      arr={customerIndustryArray}
      setSelected={setSelected}
      selected={selected}
      link="/"
      secondaryHeading="Most Popular Industries"
      btnText="Continue"
      redirect="/difficulty-level"
    />
  );
};

export default Industry;
