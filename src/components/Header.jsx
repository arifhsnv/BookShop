import React from "react";
import "./Header.css";
import { Typography, Button } from "@mui/material";
function Header() {
  return (
    <>
      <div className="header">
        <div className="left-head">
          <Typography
            variant="h1"
            sx={{
              color: "#0D0842",
              fontFamily: "Montserrat",
              fontSize: "40px",
              fontStyle: "normal",
              fontWeiht: "500",
              lineHeight: "normal",
            }}
          >
            New Releases This Week
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#0D0842",
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
            }}
          >
            It's time to update your reading list with some of the latest and
            greatest releases in the literary world. From heart-pumping
            thrillers to captivating memoirs, this week's new releases offer
            something for everyone
          </Typography>
          <Button
            variant="contained"
            sx={{
              width: "171px",
              height: "36px",
              borderRadius: "8px",
              backgroundColor: "#FFCE1A",
              "&:hover": {
                backgroundColor: "transparent",
                border: " 1px solid #FFCE1A",
                color: "#FFCE1A",
              },
              boxShadow:
                "0px 0px 0px 0px rgba(254, 175, 56, 0.10), -1px 1px 3px 0px rgba(254, 175, 56, 0.10), -5px 2px 6px 0px rgba(254, 175, 56, 0.09), -12px 5px 8px 0px rgba(254, 175, 56, 0.05), -21px 8px 9px 0px rgba(254, 175, 56, 0.01), -33px 13px 10px 0px rgba(254, 175, 56, 0.00)",
            }}
          >
            Subscribe
          </Button>
              </div>
              <div className="right-head"></div>
      </div>
    </>
  );
}

export default Header;
