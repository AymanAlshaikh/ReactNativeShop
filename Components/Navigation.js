import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import ShopDetail from "./ShopDetail";
import ShopList from "./ShopList";
import ProductDetail from "./ProductDetail";
import shopReducer from "../store/reducers/shopReducer";
import CartList from "./CartList";

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "grey",
        },
      }}
      initialRouteName="Home"
      //   initialRouteName="CartList"
    >
      <Screen options={{ headerShown: false }} name="Home" component={Home} />
      <Screen
        options={{ title: "find a shop" }}
        name="ShopList"
        component={ShopList}
      />
      <Screen
        options={{ title: "shop" }}
        name="ShopDetail"
        component={ShopDetail}
      />
      <Screen
        options={{ title: "shop" }}
        name="ProductDetail"
        component={ProductDetail}
      />
      <Screen
        options={{ title: "Cart" }}
        name="CartList"
        component={CartList}
      />
    </Navigator>
  );
};
export default RootNavigator;
