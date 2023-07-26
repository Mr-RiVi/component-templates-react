import React from "react";
import { useNavigate } from "react-router-dom";
import SelectMaterialUI from "../components/DropdownMenu/SelectMaterialUI";

import { products } from "../utils/dropdownOptions.js";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //states
    };
  }

  render() {
    return (
      <section>
        <SelectMaterialUI options={products} label="Products" />
      </section>
    );
  }
}

export default Home;
