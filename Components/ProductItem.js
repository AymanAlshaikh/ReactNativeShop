import { Body, Button, Icon, Left, List, ListItem, Right } from "native-base";
import React from "react";
import { Text, View } from "react-native";
import NumericInput from "react-native-numeric-input";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react/cjs/react.development";
import { addItem } from "../store/actions/cartActions";

const ProductItem = ({ product, navigation }) => {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(0);

  // const items = useSelector((state) => state.cartReducer.items);

  // const addItemToCart = (newItem) => {
  //   const foundItem = items.find(
  //     (item) => item.productId === newItem.productId
  //   );
  //   if (foundItem) foundItem.quantity += newItem.quantity;
  //   else items.push(newItem);
  // };

  const handleAdd = () => {
    const newItem = { quantity, productId: product.id };
    dispatch(addItem(newItem));
  };
  return (
    <ListItem>
      <Text></Text>
      {/* <Body> */}
      <Button
        onPress={() =>
          navigation.navigate("ProductDetail", { product: product })
        }
      >
        <Text>{product.name}</Text>
      </Button>

      <NumericInput
        totalHeight={30}
        totalWidth={60}
        initValue={quantity}
        value={quantity}
        onChange={setQuantity}
      />

      <Icon onPress={handleAdd} type="Ionicons" name="add-circle-outline" />
      {/* </Body> */}
    </ListItem>
  );
};
export default ProductItem;
