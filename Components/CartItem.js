import { Button } from "native-base";
import React from "react";
import { Text, View } from "react-native";

const CartItem = ({ item, navigation }) => {
  return (
    <View>
      <Text></Text>
      <Text>Name: {item.name}</Text>
      <Text>Qty: {item.quantity} Pcs</Text>
      <Text>Price: {item.quantity * item.price} BD</Text>
    </View>
  );
};
export default CartItem;
