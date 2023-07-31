import React, { useState } from "react";

import Select from "react-select";
import { products } from "../../../utils/dropdownOptions";

const SingleSelect = () => {
  return (
    <>
      <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={"null"}
        isDisabled={false}
        isLoading={false}
        isClearable={true}
        isRtl={false}
        isSearchable={true}
        name="color"
        options={products}
      />
    </>
  );
};

export default SingleSelect;
