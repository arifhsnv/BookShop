import React, { useContext } from "react";
import "./RecommendationCards.css";
import { Typography, Button } from "@mui/material";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import FavoriteContext from "../store/addCardContext.js";
function RecommendationCards({ card }) {
  const favCard = useContext(FavoriteContext);
  const getRecommendCard = favCard.recommendationItems;
  const handleClickButtonForRecommend = (id) => {
    const filtered = getRecommendCard.find((card) => card.id === id);
    if (!favCard.recommendationItemId.includes(filtered)) {
      favCard.recommendationItemId.push(filtered);
      console.log(favCard.recommendationItemId);
    }
  };
  favCard.addRecommendationCard = handleClickButtonForRecommend;
  return (
    <>
      <div className="recommendation-cards">
        <img src={card.imageProduct} alt="" />
        <div className="product-information">
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
            {card.nameBook}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "rgba(13, 8, 66, 0.52)",
              fontFamily: "Nunito Sans",
              fontStyle: "normal",
              fontSize: "14px",
              fontWeight: "400",
              lineHeight: "normal",
            }}
          >
            {card.bookDescription}
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
              {card.newPriceProduct}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#6C6C6C",
                fontFamily: "Nunito Sans",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal",
                textDecorationLine: "line-through",
              }}
            >
              {card.oldPriceProduct}
            </Typography>
          </div>
          <Button
            onClick={() => handleClickButtonForRecommend(card.id)}
            variant="contained"
            sx={{
              borderRadius: "8px",
              backgroundColor: "#FFCE1A",
              "&:hover": { backgroundColor: "#FFCE1A" },
              width: "170px",
              height: "36px",
              color: "#fff",
              fontFamily: "Nunito Sans",
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "normal",
              marginInline: "auto",
            }}
          >
            <LocalGroceryStoreOutlinedIcon />
            Add to basket
          </Button>
        </div>
      </div>
    </>
  );
}

export default RecommendationCards;
