import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import Home from "./Components/Home";
import ShopDetail from "./Components/ShopDetail";
import ShopList from "./Components/ShopList";
import store from "./store";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./Components/Navigation";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
        {/* <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <Home />
          <ShopList />
          <ShopDetail />
          <StatusBar style="auto" />
        </View> */}
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
