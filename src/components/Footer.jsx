import React from "react";
import "./Footer.css";
import { Typography, Button } from "@mui/material";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="top-footer">
          <img src="src/assets/Logo.png" alt="" />
          <Typography
            variant="body1"
            sx={{
              color: "#0D0842",
              fontFamily: "Nunito Sans",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
              width: "454px",
              height: "44px",
            }}
          >
            Subscribe to stay tuned for new product and latest updates. Let’s do
            it!
          </Typography>
        </div>
        <div className="center-footer">
          <ul className="list">
            <li>About</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Gallery</li>
            <li>Team</li>
          </ul>
          <div className="form">
            <input placeholder="Enter your email address" type="email" />
            <Button
              variant="contained"
              sx={{
                width: "171px",
                height: "36px",
                borderRadius: "0px 8px 8px 0px",
                backgroundColor: "#FFCE1A",
                "&:hover": {
                  backgroundColor: "transparent",
                  border: "1px solid #FFCE1A",
                  color: "#FFCE1A",
                },
              }}
            >
              Subscribe
            </Button>
          </div>
              </div>
              <div className="bottom-footer">
                  <ul className="list">
                      <li>Privacy Policy</li>
                      <li>Terms of Use</li>
                      <li>Sales and Refund</li>
                      <li>Legal</li>
                  </ul>
                  <div className="logo-footer">
                      <img src="src/assets/socialmedia.png" alt="" />
                  </div>
              </div>
      </div>
    </>
  );
}

export default Footer;
