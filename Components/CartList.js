import { List, ListItem, Spinner } from "native-base";
import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import CheckOutButton from "./Buttons/CheckOutButton";
import CartItem from "./CartItem";

const CartList = ({ navigation }) => {
  const products = useSelector((state) => state.productReducer.products);
  const items = useSelector((state) => state.cartReducer.items);
  const loading = useSelector((state) => state.productReducer.loading);

  let total = 0;
  items.forEach((item) => (total += item.quantity));

  if (loading) return <Spinner color="red" loading={true} size={150} />;

  const cartItem = items.map((item) => ({
    ...products.find((product) => product.id === item.productId),
    quantity: item.quantity,
  }));

  const list = cartItem.map((item) => (
    <CartItem item={item} key={item.id} navigation={navigation} />
  ));

  return (
    <List
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CheckOutButton />
      {list}
      <Text>total: {total}</Text>
    </List>
  );
};
export default CartList;
