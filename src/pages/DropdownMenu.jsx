import React, { useState } from "react";

import SelectMaterialUI from "../components/DropdownMenu/MaterialUI/SelectMaterialUI";
import { products } from "../utils/dropdownOptions";
import SelectMultipleMaterialUI from "../components/DropdownMenu/MaterialUI/SelectMultipleMaterialUI";
import SingleSelect from "../components/DropdownMenu/React-Select/SingleSelect.jsx";

const DropdownMenu = () => {
  const [value, setValue] = useState();
  const [values, setValues] = useState([]);

  return (
    <>
      <SelectMaterialUI
        options={products}
        label="Products"
        onChange={setValue}
      />
      <h3>This is parent component and selected product is : {value}</h3>
      <br />
      <SelectMultipleMaterialUI
        options={products}
        label="Products"
        onChange={setValues}
      />
      <h3>
        This is parent component and selected products are : {values.join(",")}
      </h3>
      <br />
      <SingleSelect />
    </>
  );
};

export default DropdownMenu;
