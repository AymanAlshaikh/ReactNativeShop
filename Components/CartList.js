import { List } from "native-base";
import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartList = ({ navigation }) => {
  const products = useSelector((state) => state.productReducer.products);
  const items = useSelector((state) => state.cartReducer.items);
  // const loading = useSelector((state) => state.productReducer.loading)

  const cartItem = items.map((item) => ({
    ...products.find((product) => product.id === item.productId),
    quantity: item.quantity,
  }));

  const list = cartItem.map((item) => (
    <CartItem item={item} key={item.name} navigation={navigation} />
  ));

  //if (!loading)
  return (
    <List
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {list}
    </List>
  );
  //else return <Spinner color="red" loading={true} size={150} />;
};
export default CartList;
