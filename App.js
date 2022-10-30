import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';

import "react-native-gesture-handler";

import CategoryScreen from "./screens/CategoryScreen";
import ProductsCategory from "./screens/ProductsCategory";
import ProductDetails from "./screens/ProductDetails";
import FavoritesScreen from "./screens/FavoritesScreen";

import IconButton from "./components/IconButton";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// create drawer nested router 
function MyDrawer() {
  return (
    <Drawer.Navigator screenOptions={{
      // change backgroundColor header and some css option
      headerTintColor: "#fff",
      headerStyle: { backgroundColor: 'red' },
      sceneContainerStyle: { backgroundColor: '#3f2f25' }, // change background screen or page
      drawerContentStyle: { backgroundColor: '#3f2f25' }, // change BG side bar
      drawerInactiveTintColor: '#fff', // label color
      drawerActiveTintColor: '#CF0A0A', // active label color
      drawerActiveBackgroundColor: '#EEEEEE' // active backGroundColor
    }}>
      <Drawer.Screen name="Categories" component={CategoryScreen} options={{
        title: 'All Categories',
        drawerIcon: ({ color, size }) => ( <IconButton name="list" color={color} size={size} /> )
      }} />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} options={{
        drawerIcon: ({ color, size }) => ( <IconButton name="star " color={color} size={size} /> )
      }} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Drawer"
            component={MyDrawer}
            options={{
              // title: "All Categories",
              headerShown: false, // hide header stack navigation
              headerStyle: {
                backgroundColor: "#351401",
              }
            }}
          />
          <Stack.Screen name="productsCategory" component={ProductsCategory} />
          <Stack.Screen name="ProductDetails" component={ProductDetails} />
        </Stack.Navigator>
        {/* <CategoryScreen /> */}
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});

/**
 * React Navigation Package
 * Some configure
 * 1- NavigationContainer
 */
