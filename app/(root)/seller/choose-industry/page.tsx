"use client";
import Choose from "@/components/root-comps/Choose";
import { industryArray } from "@/constants/Constants";

import React, { useState } from "react";

const Industry = () => {
  const [selected, setSelected] = useState("");
  return (
    <Choose
      heading="What industry are you in?"
      arr={industryArray}
      setSelected={setSelected}
      selected={selected}
      link="/"
      secondaryHeading="Most Popular Industries"
      btnText="Continue"
      redirect="/seller/selling-info"
    />
  );
};

export default Industry;
