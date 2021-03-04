import { useNavigation } from "@react-navigation/native";
import { Button, Icon, Text } from "native-base";
import React from "react";

const SignupButton = () => {
  const navigation = useNavigation();
  return (
    <Icon
      onPress={() => navigation.navigate("SignUp")}
      type="AntDesign"
      name="login"
    />
  );
};
export default SignupButton;
