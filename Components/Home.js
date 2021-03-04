import React from "react";
import { Body, Button, List, ListItem, Text } from "native-base";
import { View } from "react-native";
import SignupButton from "./Buttons/SignupButton";
import LogoutButton from "./Buttons/LogoutButton";
import { useSelector } from "react-redux";

const Home = ({ navigation }) => {
  const user = useSelector((state) => state.authReducer.user);

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
      <Text>{user ? <LogoutButton /> : ""}</Text>
    </Body>
  );
};
export default Home;
