import { useLayoutEffect } from "react";
import { View, Image, Text, StyleSheet, Button } from "react-native";
import IconButton from "../components/IconButton";

import { Products } from "../Data/data";

function ProductDetails({ route, navigation }) {
  const productId = route.params.productId;
  const productItem = Products.find((product) => product.id === productId);

  function headerRightHandler() {
    console.log("Pressed");
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton onPress={headerRightHandler} name="star" color="#000" />
        );
      },
    });
  }, [navigation, headerRightHandler]);

  return (
    <View>
      <Image
        source={{ uri: productItem.imageUrl }}
        style={styles.productImage}
      />
      <Text style={styles.productTitle}> {productItem.title} </Text>
      <View style={styles.productGrid}>
        <Text style={styles.subTitle}> Category: {productItem.category} </Text>
        <Text style={styles.subTitle}> Price: {productItem.price} </Text>
      </View>
      <View>
        <Text style={styles.productContent}> {productItem.description} </Text>
      </View>
    </View>
  );
}

export default ProductDetails;

const styles = StyleSheet.create({
  productImage: {
    width: "100%",
    height: 300,
  },
  productTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: 24,
  },
  productGrid: {
    flexDirection: "row",
    justifyContent: "center",
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 16,
    color: "#333",
  },
  productContent: {
    fontSize: 17,
    color: "#333",
    margin: 8,
    textAlign: "center",
    fontWeight: "500",
    lineHeight: 30,
  },
});

/**
 * useNavigation() hook from @react-navigation/native
 * get id from screen product details by route object
 *
 * Create Custom Header like add [ button - text ]
 * way - 1 <Stack.screen name="" component={} options={{ headerLeft - headerRight: JSX () => { return( JSX ); } }} />
 * way - 2 naviagtion.setOptions with useLayoutEffect() hook
 * Create icon
 * Ionicons from @expo/vector-icons
 * <Ionicons name="iconName" size={number} color="color" />
 */
