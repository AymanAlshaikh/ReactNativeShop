import React from "react";
import { Body, Button, List, ListItem, Text } from "native-base";
import { View } from "react-native";

const Home = ({ navigation }) => {
  return (
    <Body
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
    </Body>
  );
};
export default Home;
