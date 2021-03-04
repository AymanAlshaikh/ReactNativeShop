import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import store from "./store";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./Components/Navigation";
import { Spinner, Container } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    Roboto: require("native-base/Fonts/Roboto.ttf"),
    Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    ...Ionicons.font,
  });

  if (!loaded) return <Spinner color="#132D4B" />;
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
