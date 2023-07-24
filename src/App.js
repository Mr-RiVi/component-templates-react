/*
  Pre requirements for Material UI components
    -yarn add @mui/material @emotion/react @emotion/styled
*/

import { useState } from "react";
import SelectMaterialUI from "./components/DropdownMenu/SelectMaterialUI";
import SelectMultipleMaterialUI from "./components/DropdownMenu/SelectMultipleMaterialUI";

import "./App.css";
import { products } from "./utils/dropdownOptions";

function App() {
  const [x, setX] = useState();

  return (
    <div className="App">
      <SelectMaterialUI
        options={products}
        label={"Level"}
        onChange={selectedValue}
      />
      <p>
        Selected {x} : <strong>{x}</strong>
      </p>
      <SelectMultipleMaterialUI options={products} label={"Product Names"} />
    </div>
  );
}

export default App;
