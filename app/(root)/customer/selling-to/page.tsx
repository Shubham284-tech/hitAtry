"use client";
import Choose from "@/components/root-comps/Choose";
import { sellingToArray } from "@/constants/Constants";

import React, { useState } from "react";

const Customer = () => {
  const [selected, setSelected] = useState("");
  return (
    <Choose
      heading="Who are you selling to?"
      arr={sellingToArray}
      setSelected={setSelected}
      selected={selected}
      link="/"
      secondaryHeading="Popular consumer personas"
      btnText="Continue"
      showImages={false}
      redirect="/customer/industry"
    />
  );
};

export default Customer;
