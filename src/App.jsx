import { useContext, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header.jsx";
import BasicSelect from "./components/BasicSelect.jsx";
import CardsContainer from "./components/CardsContainer.jsx";
import FavoriteContext from "./store/addCardContext.js";
import Recommendation from "./components/Recommendation.jsx";
import RecommendationCardsContainer from "./components/RecommendationCardsContainer.jsx";
import News from "./components/News.jsx";
import Footer from "./components/Footer.jsx";
function App() {
  const favContext = useContext(FavoriteContext);
  const [count, setCount] = useState(0);

  return (
    <>
      <FavoriteContext.Provider
        value={{
          items: [],
          addCard: (id) => {},
          cardItems: [],
          handleFilterForType: (type, values) => {},
          filteredProducts: [],
          handleFilter: () => {},
          setFilteredProduct: () => {},
          recommendationItems: [],
          recommendationItemId: [],
          addRecommendationCard: (id) => {},
        }}
      >
        <div className="container">
          <Navbar />
          <Header />
          <BasicSelect />
          <CardsContainer />
          <Recommendation />
          <RecommendationCardsContainer />
          <News />
          <Footer />
        </div>
      </FavoriteContext.Provider>
    </>
  );
}

export default App;
