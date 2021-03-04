import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import ShopDetail from "./ShopDetail";
import ShopList from "./ShopList";
import ProductDetail from "./ProductDetail";
import CartList from "./CartList";
import CartButton from "./Buttons/CartButton";
import SignUp from "./authentication/SignUp";
import SignIn from "./authentication/SignIn";
import SignupButton from "./Buttons/SignupButton";
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
      // initialRouteName="SignUp"
    >
      <Screen options={{ headerShown: false }} name="Home" component={Home} />
      <Screen
        options={{ headerShown: false }}
        name="SignUp"
        component={SignUp}
      />
      <Screen
        options={{ headerShown: false }}
        name="SignIn"
        component={SignIn}
      />
      <Screen
        options={{
          title: "find a shop",

          headerRight: () => <CartButton />,
        }}
        name="ShopList"
        component={ShopList}
      />
      <Screen
        options={{
          title: "shop",
          headerRight: () => <CartButton />,
        }}
        name="ShopDetail"
        component={ShopDetail}
      />
      <Screen
        options={{ title: "shop", headerRight: () => <SignupButton /> }}
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
