import { useContext } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { FavoriteContext } from "../store/context/favorite-context";

import { Products } from "../Data/data";

import { useNavigation } from "@react-navigation/native";
import ProductCategoryItem from "../components/productCategoryItem";

function FavoritesScreen() {
  const useNaviagte = useNavigation();
  function productDetailsHandler() {
    useNaviagte.navigate("ProductDetails", {
      productId: id,
    });
  }

  function renderProductsCategory(itemData) {
    return (
      <ProductCategoryItem
        title={itemData.item.title}
        imageUrl={itemData.item.imageUrl}
        id={itemData.item.id}
      />
    );
  }

  const productFavoriteItems = useContext(FavoriteContext);
  const products = Products.filter((product) =>
    productFavoriteItems.favProducts.includes(product.id)
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderProductsCategory}
      />
    </View>
  );
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
