import React from "react";
import "./Navbar.css";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AlertDialog from "./AlertDialog.jsx";
function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="left-nav">
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{
              width: "296px",
              height: "36px",
              borderRadius: "8px",
              backgroundColor: "#EAEAEA",
              color: "#828282",
              fontFamily: "Nunito Sans",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
              paddingLeft: "10px",
            }}
            placeholder="What are you looking for?"
            inputProps={{ "aria-label": "search google maps" }}
          />
        </div>
        <div className="right-nav">
          <PersonOutlinedIcon
            sx={{
              width: "18px",
              height: "22px",
              marginLeft: "20px",
              cursor: "pointer",
            }}
          />
          <FavoriteBorderOutlinedIcon
            sx={{
              width: "25px",
              height: "20px",
              marginLeft: "20px",
              cursor: "pointer",
            }}
          />
          <AlertDialog/>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
