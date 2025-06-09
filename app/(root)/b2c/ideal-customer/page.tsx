"use client";
import Choose from "@/components/root-comps/Choose";
import { b2cIdealCustomerArray } from "@/constants/Constants";

import React, { useState } from "react";

const Industry = () => {
  const [selected, setSelected] = useState("");
  return (
    <Choose
      heading="Who is your ideal customer?"
      arr={b2cIdealCustomerArray}
      setSelected={setSelected}
      selected={selected}
      link="/"
      secondaryHeading="Popular consumer personas"
      btnText="Continue"
      showImages={false}
      showSkip={true}
      redirect="/b2c/buyer-persona"
    />
  );
};

export default Industry;
