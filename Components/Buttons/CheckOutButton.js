import React from "react";
import { Icon } from "native-base";
import { useDispatch } from "react-redux";
import { checkOut } from "../../store/actions/cartActions";

const CheckOutButton = () => {
  const dispatch = useDispatch();
  return (
    <Icon
      onPress={() => dispatch(checkOut())}
      type="FontAwesome5"
      name="money-check-alt"
    />
  );
};
export default CheckOutButton;
