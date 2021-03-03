import { Button, Icon } from "native-base";
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
      <Icon
        type="FontAwesome5"
        name="store"
        onPress={() => navigation.navigate("ShopDetail", { shop: shop })}
      />
      <Text>{shop.name}</Text>
    </View>
  );
};
export default ShopItem;
