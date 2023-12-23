import React from "react";
import { Typography } from "@mui/material";
function Recommendation() {
  return (
    <>
      <div className="recommendation">
        <Typography
          variant="h3"
          sx={{
            color: "#0D0842",
            fontFamily: "Montserrat",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
            marginLeft: "20px",
            marginTop: "100px",
          }}
        >
          Recommended for you
        </Typography>
      </div>
    </>
  );
}

export default Recommendation;
