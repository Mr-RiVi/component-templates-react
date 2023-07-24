import React, { useState } from "react";

import { Box, Typography, TextField, MenuItem } from "@mui/material";

/**
 * A reusable functional component that represents a Material-UI
 * select/dropdown menu.
 * @param {Object} props - The props passed to the component.
 * @param {string[]} props.options - The array of options to be shown in the dropdown menu.
 * @param {string} props.label - The description or label for the dropdown menu.
 * @returns {JSX.Element} - The rendered component.
 */

// props destructured in here
const SelectMaterialUI = ({ options, label, onChange }) => {
  const [selectedValue, setSelectedValue] = useState();

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    onChange(event.target.value);
  };

  return (
    <Box>
      <Typography variant="h4" align="center">
        Select Material UI
      </Typography>
      <Box>
        <TextField
          label={label}
          value={selectedValue}
          onChange={handleChange}
          select
          SelectProps={{}}
          sx={{ width: "200px" }}
        >
          {options.map((option) => (
            <MenuItem value={option} key={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      <section>
        <p>
          Selected {label} : <strong>{selectedValue}</strong>
        </p>
      </section>
    </Box>
  );
};

export default SelectMaterialUI;
