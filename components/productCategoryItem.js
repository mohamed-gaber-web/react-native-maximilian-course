import { View, Text, Pressable, Image, StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/native";

function ProductCategoryItem({ title, imageUrl, id }) {
  const useNaviagte = useNavigation();
  function productDetailsHandler() {
    useNaviagte.navigate("ProductDetails", {
      productId: id,
    });
  }

  return (
    <View style={styles.productItem}>
      <Pressable
        onPress={productDetailsHandler}
        android_ripple={{ color: "#ccc" }}
      >
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <Text style={styles.title}> {title} </Text>
      </Pressable>
    </View>
  );
}

export default ProductCategoryItem;

const styles = StyleSheet.create({
  productItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#fff",
    elevation: 4,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "800",
    padding: 16,
  },
});
