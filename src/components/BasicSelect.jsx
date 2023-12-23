import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Typography } from "@mui/material";
import FavoriteContext from "../store/addCardContext.js";
export default function BasicSelect() {
  const typeCard = [
    {
      id: 1,
      value: "Fiction",
    },
    {
      id: 2,
      value: "Mystery",
    },
    {
      id: 3,
      value: "Horror",
    },
  ];

  const favCard = React.useContext(FavoriteContext);
  const cardType = favCard.items;
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
    favCard.handleFilterForType(event.target.value, cardType);

    favCard.setFilteredProduct = favCard.handleFilterForType;
  };

  return (
    <Box sx={{ width: "100%", height: "20vh" }}>
      <Typography
        variant="h2"
        sx={{
          color: "#0D0842",
          marginLeft: "60px",
          fontFamily: "Montserrat",
          fontSize: "24px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "normal",
        }}
      >
        Top Sellers
      </Typography>
      <FormControl sx={{ width: "188px", height: "36px", marginLeft: "60px" }}>
        <InputLabel id="demo-simple-select-label">Choose a genre</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Filter"
          onChange={handleChange}
        >
          {typeCard.map((type) => (
            <MenuItem value={type.value}>{type.value}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
