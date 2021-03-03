import { Button, Icon, ListItem } from "native-base";
import React from "react";
import { Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { removeItem } from "../store/actions/cartActions";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <ListItem>
      <Text></Text>
      <Text>Name: {item.name}</Text>
      <Text>Qty: {item.quantity} Pcs</Text>
      <Text>Price: {item.quantity * item.price} BD</Text>
      <Icon
        onPress={() => dispatch(removeItem(item.id))}
        type="Entypo"
        name="trash"
      />
    </ListItem>
  );
};
export default CartItem;
