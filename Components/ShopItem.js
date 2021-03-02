import { Button } from "native-base";
import React from "react";
import { Text, View } from "react-native";
import shopReducer from "../store/reducers/shopReducer";

const ShopItem = ({ shop, navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button onPress={() => navigation.navigate("ShopDetail", { shop: shop })}>
        <Text>{shop.name}</Text>
      </Button>
    </View>
  );
};
export default ShopItem;
