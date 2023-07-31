import React, { useState } from "react";

import { Box, Typography, TextField, MenuItem } from "@mui/material";

/**
 * A reusable functional component that represents a Material-UI
 * multiple-select dropdown menu.
 * @param {Object} props - The props passed to the component.
 * @param {string[]} props.options - The array of options to be shown in the dropdown menu.
 * @param {string} props.label - The description or label for the dropdown menu.
 * @returns {JSX.Element} - The rendered component.
 */

const SelectMultipleMaterialUI = ({ options, label, onChange }) => {
  //ProductName state should be an array,
  //Cz we have to store multiple values in this state
  const [selectedValues, setSelectedValues] = useState([]);

  const handleChange = (e) => {
    setSelectedValues(e.target.value);
    onChange(e.target.value);
  };

  return (
    <Box>
      <Typography variant="h4" align="center">
        Select Multiple Material UI
      </Typography>
      <Box>
        <TextField
          label={label}
          value={selectedValues}
          onChange={handleChange}
          select
          SelectProps={{ multiple: true }} // In here multiple attribute should be true if we choose multi values
          sx={{ width: "200px" }}
        >
          {options.map((option) => (
            <MenuItem value={option} key={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      {/* <section>
        <p>
          Selected {label} : <strong>{selectedValues.join(",")}</strong>
        </p>
      </section> */}
    </Box>
  );
};

export default SelectMultipleMaterialUI;
