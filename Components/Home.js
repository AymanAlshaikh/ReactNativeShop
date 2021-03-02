import React from "react";
import { Button, Text } from "native-base";
import { View } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Home</Text>
      <Button onPress={() => navigation.navigate("ShopList")}>
        <Text>Shop List</Text>
      </Button>
    </View>
  );
};
export default Home;
