import { View, Text, Pressable, StyleSheet } from "react-native";
import { DebugInstructions } from "react-native/Libraries/NewAppScreen";

function CategoryItem({ title, color, onPress }) {
  return (
    <View style={[styles.categoryContainer, { backgroundColor: color }]}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={styles.button}
        onPress={onPress}
      >
        <View style={styles.categoryItem}>
          <Text style={styles.title}> {title} </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryItem;

const styles = StyleSheet.create({
  categoryContainer: {
    flex: 1,
    margin: 16,
    height: 150,
    elevation: 5,
    borderRadius: 8,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  button: {
    flex: 1,
  },
  categoryItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
