import { Button, Text } from "native-base";
import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import ShopItem from "./ShopItem";

const ShopList = ({ navigation }) => {
  const shops = useSelector((state) => state.shopReducer.shop);
  console.log(shops);
  const list = shops.map((shop) => (
    <ShopItem navigation={navigation} shop={shop} key={shop.id} />
  ));
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button onPress={() => navigation.navigate("CartList")}>
        <Text>Cart</Text>
      </Button>
      {list}
    </View>
  );
};
export default ShopList;
