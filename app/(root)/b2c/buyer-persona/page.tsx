"use client";
import ChooseMultiple from "@/components/root-comps/ChooseMultiple";
import {
  b2cAgeArray,
  b2cGenderArray,
  b2cIncomeArray,
} from "@/constants/Constants";

import React, { useState } from "react";

const Buyer = () => {
  const [selectedAge, setSelectedAge] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedIncome, setSelectedIncome] = useState("");
  return (
    <ChooseMultiple
      heading="Let’s build your buyer persona"
      arr1={b2cAgeArray}
      arr2={b2cGenderArray}
      arr3={b2cIncomeArray}
      setSelected1={setSelectedAge}
      setSelected2={setSelectedGender}
      setSelected3={setSelectedIncome}
      selected1={selectedAge}
      selected2={selectedGender}
      selected3={selectedIncome}
      link="/"
      secondaryHeading1="Select Age"
      secondaryHeading2="Select Gender"
      secondaryHeading3="Select Income Bracket"
      btnText="Continue"
      showImages={false}
      showSkip={true}
      randomBtn
    />
  );
};

export default Buyer;
