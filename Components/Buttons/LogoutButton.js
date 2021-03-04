import { useNavigation } from "@react-navigation/native";
import { Button, Icon, Text } from "native-base";
import React from "react";
import { useDispatch } from "react-redux";
import { signout } from "../../store/actions/authActions";

const LogoutButton = () => {
  const dispatch = useDispatch();
  return (
    <Icon onPress={() => dispatch(signout())} type="AntDesign" name="logout" />
  );
};
export default LogoutButton;
