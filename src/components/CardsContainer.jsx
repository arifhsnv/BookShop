import React, { useContext, useEffect, useState } from "react";
import "./CardsContainer.css";
import TopSelllersCards from "./TopSelllersCards.jsx";
import FavoriteContext from "../store/addCardContext.js";
import useFetch from "../hooks/useFetch.js";
function CardsContainer() {
  const favCard = useContext(FavoriteContext);
  const [getCard, setgetCard] = useState([]);
  const fetchData = useFetch(
    "https://aaaasda-afbf9-default-rtdb.firebaseio.com/products.json"
  );
  useEffect(() => {
    fetchData.getResponseData;
    if (fetchData.getResponseData) {
      setgetCard(fetchData.getResponseData);
    }

    favCard.items = fetchData.getResponseData;
  }, [fetchData.getResponseData]);
  const filterForType = (type, values) => {
    const filteredCards = favCard.items.filter((card) => card.type === type);
    return setgetCard(filteredCards);
  };
  favCard.handleFilterForType = filterForType;

  return (
    <>
      <div className="cards-container">
        {getCard.map((product) => (
          <TopSelllersCards key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default CardsContainer;
