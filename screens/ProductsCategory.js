import { View, FlatList, StyleSheet } from "react-native";
import ProductCategoryItem from "../components/productCategoryItem";

import { Products, Categroies } from "../Data/data";

function ProductsCategory({ route, navigation }) {
  const catId = route.params.categoryId;
  const displayProductsCategory = Products.filter((productItem) => {
    return productItem.catId === catId;
  });

  // set title page
  const categoryTitle = Categroies.find(
    (cattegory) => cattegory.id === catId
  ).title;
  navigation.setOptions({
    title: categoryTitle,
  });

  function renderProductsCategory(itemData) {
    return (
      <ProductCategoryItem
        title={itemData.item.title}
        imageUrl={itemData.item.imageUrl}
        id={itemData.item.id}
      />
    );
  }

  console.log(displayProductsCategory);
  return (
    <View style={styles.container}>
      <FlatList
        data={displayProductsCategory}
        keyExtractor={(item) => item.id}
        renderItem={renderProductsCategory}
      />
    </View>
  );
}

export default ProductsCategory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
