import { Body, Button, List, ListItem } from "native-base";
import React from "react";
import { Text, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";
import { useState } from "react/cjs/react.development";
import { signIn, signUp } from "../../store/actions/authActions";

const SignIn = ({ navigation }) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    username: "",
    password: "",
    // firstName: "",
    // lastName: "",
    // email: "",
  });
  console.log(user);
  const handleSubmit = () => {
    dispatch(signIn(user, navigation));
  };
  return (
    <Body
    //   style={{
    //     flex: 1,
    //     flexDirection: "column",
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    >
      <Text>SignIn</Text>
      <TextInput
        placeholder="Username"
        onChangeText={(username) => setUser({ ...user, username: username })}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(password) => setUser({ ...user, password: password })}
      />
      {/* <TextInput
        placeholder="firstName"
        secureTextEntry={true}
        onChangeText={(firstName) => setUser({ ...user, firstName: firstName })}
      />
      <TextInput
        placeholder="lasttName"
        secureTextEntry={true}
        onChangeText={(lasttName) => setUser({ ...user, lasttName: lasttName })}
      /> */}
      {/* <TextInput
        placeholder="email"
        secureTextEntry={true}
        onChangeText={(email) => setUser({ ...user, email: email })}
      /> */}
      <Button onPress={handleSubmit}>
        <Text>SignIn</Text>
      </Button>
      <Button onPress={() => navigation.navigate("SignUp")}>
        <Text>Register</Text>
      </Button>
    </Body>
  );
};
export default SignIn;
