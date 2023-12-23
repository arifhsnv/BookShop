import React, { useContext, useEffect, useState } from "react";
import "./RecommendationCardsContainer.css";
import RecommendationCards from "./RecommendationCards.jsx";
import FavoriteContext from "../store/addCardContext.js";
import useFetch from "../hooks/useFetch.js";
function RecommendationCardsContainer() {
  const favCard = useContext(FavoriteContext);

  const [recommendCards, setrecommendCards] = useState([]);

  const fetchData = useFetch(
    "https://aaaasda-afbf9-default-rtdb.firebaseio.com/recommendproduct.json"
  );
  useEffect(() => {
    setrecommendCards(fetchData.getResponseData);
    if (fetchData.getResponseData) {
      setrecommendCards(fetchData.getResponseData);
    }
    favCard.recommendationItems = fetchData.getResponseData;
  }, [fetchData.getResponseData]);
  return (
    <>
      <div className="recommendation-container">
        {recommendCards.map((card) => (
          <RecommendationCards key={card.id} card={card} />
        ))}
      </div>
    </>
  );
}

export default RecommendationCardsContainer;
