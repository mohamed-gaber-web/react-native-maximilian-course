import { FlatList } from "react-native";
import CategoryItem from "../components/CategoryItem";
import { Categroies } from "../Data/data";

function CategoryScreen({ navigation }) {
  function renderCategoriesData(itemData) {
    function pressHandler() {
      navigation.navigate("productsCategory", {
        categoryId: itemData.item.id,
      });
    }
    return (
      <CategoryItem
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={Categroies}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoriesData}
      numColumns={2}
    />
  );
}

export default CategoryScreen;
