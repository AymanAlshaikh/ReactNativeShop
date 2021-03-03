import { Button, Left, ListItem, Text } from "native-base";
import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import ShopItem from "./ShopItem";

const ShopList = ({ navigation }) => {
  const shops = useSelector((state) => state.shopReducer.shop);

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
      <View>{list}</View>
    </View>
  );
};
export default ShopList;
