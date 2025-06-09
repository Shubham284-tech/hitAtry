"use client";
import Choose from "@/components/root-comps/Choose";
import { sellingArray } from "@/constants/Constants";

import React, { useState } from "react";

const Selling = () => {
  const [selected, setSelected] = useState("");
  return (
    <Choose
      heading="What are you selling?"
      arr={sellingArray}
      setSelected={setSelected}
      selected={selected}
      link="/"
      btnText="Continue"
      secondaryHeading="Most Popular Products"
      redirect="/business-model"
    />
  );
};

export default Selling;
