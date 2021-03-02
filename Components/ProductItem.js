import { Button, Left } from "native-base";
import React from "react";
import { Text, View } from "react-native";
import NumericInput from "react-native-numeric-input";
import { useState } from "react/cjs/react.development";
import { addItemToCart } from "../store/actions/cartActions";

const ProductItem = ({ product, navigation }) => {
  const [quantity, setQuantity] = useState(0);
  const handleAdd = () => {
    const newItem = { quantity, productId: product.id };
    cartReducer.addItemToCart(newItem);
  };
  return (
    <View>
      <Text></Text>
      <Button
        onPress={() =>
          navigation.navigate("ProductDetail", { product: product })
        }
      >
        <Text>{product.name}</Text>
      </Button>
      {/* <Image
            source={{ uri: product.image ?? "https://docs.expo.io/static/images/android-studio-build-tools.png" }}
            style={{ width: 400, height: 400 }}
        /> */}
      {/* <Left> */}
      <NumericInput
        totalHeight={30}
        totalWidth={60}
        initValue={quantity}
        value={quantity}
        onChange={setQuantity}
      />
      <Button onPress={handleAdd}>
        <Text>ADD</Text>
      </Button>
      {/* </Left> */}
    </View>
  );
};
export default ProductItem;
