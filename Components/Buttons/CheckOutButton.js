import React from "react";
import { Icon } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { checkOut } from "../../store/actions/cartActions";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Alert, Button } from "react-native";

const CheckOutButton = () => {
  const navigation = useNavigation();
  const user = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();

  const handlePress = () => {
    if (user) {
      dispatch(checkOut());
    } else {
      Alert.alert(
        "Alert Title",
        "U need to sign in",
        [
          {
            text: "Ask me later",
            onPress: () => console.log("Ask me later pressed"),
          },
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "SignIn", onPress: () => navigation.navigate("SignIn") },
        ],
        { cancelable: false }
      );
    }
  };
  return (
    <Icon onPress={handlePress} type="FontAwesome5" name="money-check-alt" />
  );
};
export default CheckOutButton;
