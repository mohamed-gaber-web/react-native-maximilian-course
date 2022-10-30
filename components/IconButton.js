import { Pressable, StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons";

function IconButton({ onPress, color, name }) {
  return (
    <Pressable style={styles.iconContainer} onPress={onPress}>
      <Ionicons name={name} size={24} color={color} />
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  iconContainer: {
    marginEnd: 8,
  },
});
