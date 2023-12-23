import { createContext } from "react";

const FavoriteContext = createContext({
  items: [],
  addCard: (id) => {},
  cardItems: [],
  handleFilter: () => {},
  handleFilterForType: (type, values) => {},
  filteredProducts: [],
  setFilteredProduct: () => {},
  recommendationItems: [],
  recommendationItemId: [],
  addRecommendationCard: (id) => {},
});

export default FavoriteContext;
