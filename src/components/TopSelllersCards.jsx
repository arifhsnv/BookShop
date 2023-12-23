import React, { useContext, useState } from "react";
import "./TopSellerCards.css";
import { Typography, Button } from "@mui/material";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import FavoriteContext from "../store/addCardContext.js";
function TopSelllersCards({ product }) {
  const favCard = useContext(FavoriteContext);
  const getCard = favCard.items;

  const [getType, setgetType] = useState([]);

  const handleClickButton = (id) => {
    const filteredCard = getCard.find((item) => item.id === id);
    setgetType(filteredCard);
    if (!favCard.cardItems.includes(filteredCard)) {
      favCard.cardItems.push(filteredCard);
    }
  };
  favCard.addCard = handleClickButton;

  return (
    <>
      <div className="top-card">
        <img src={product.imageProduct} alt="" />
        <div className="information-card">
          <Typography
            variant="h3"
            sx={{
              color: "#0D0842",
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
            }}
          >
            {product.nameBook}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "rgba(13,8,66,0.52)",
              fontFamily: "Nunito sans",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
            }}
          >
            {product.bookDescription}
          </Typography>
          <div className="price-product">
            <Typography
              variant="body1"
              sx={{
                color: "#0D0842",
                fontFamily: "Nunito Sans",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal",
              }}
            >
              {product.newPriceProduct}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#6c6c6c",
                fontFamily: "Nunito Sans",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal",
                textDecorationLine: "line-through",
              }}
            >
              {product.oldPriceProduct}
            </Typography>
          </div>
          <Button
            onClick={() => handleClickButton(product.id)}
            variant="contained"
            sx={{
              width: "170px",
              height: "36px",
              borderRadius: "8px",
              backgroundColor: "#FFCE1A",
              "&:hover": { backgroundColor: "#FFCE1A" },
              color: "#fff",
              fontFamily: "Nunito sans",
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "normal",
              marginInline: "auto",
            }}
          >
            <LocalGroceryStoreOutlinedIcon />
            Add To Basket
          </Button>
        </div>
      </div>
    </>
  );
}

export default TopSelllersCards;
