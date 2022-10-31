import { createContext, useState } from "react";

export const FavoriteContext = createContext({
  favProducts: [],
  addToFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoriteProductsProvider({ children }) {
  const [productFavorite, setProductFavorite] = useState([]);
  function addFavoriteProduct(id) {
    setProductFavorite((prevFavoriteProduct) => [...prevFavoriteProduct, id]);
  }
  function removeFavoriteProduct(id) {
    setProductFavorite((prevFavoriteProduct) =>
      prevFavoriteProduct.filter((productId) => productId !== id)
    );
  }

  const value = {
    favProducts: productFavorite,
    addToFavorite: addFavoriteProduct,
    removeFavorite: removeFavoriteProduct,
  };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
}

export default FavoriteProductsProvider;
