import { useNavigation } from "@react-navigation/native";
import { Button, Icon, Text } from "native-base";
import React from "react";

const CartButton = () => {
  const navigation = useNavigation();
  return (
    <Icon
      onPress={() => navigation.navigate("CartList")}
      type="FontAwesome"
      name="opencart"
    />
  );
};
export default CartButton;
