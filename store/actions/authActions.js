import decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import instance from "./instance";

// ACTION TYPES
import * as types from "./types";

export const signUp = (userData, navigation) => async (dispatch) => {
  try {
    const res = await instance.post("/signup", userData);
    dispatch(setUser(res.data.token));
    await AsyncStorage.setItem("myToken", res.data.token);
    navigation.replace("Home");
    dispatch({
      type: types.SET_USER,
      payload: { userData: decode(res.data.token) },
    });
  } catch (error) {
    console.log(error);
  }
};

export const signout = () => {
  AsyncStorage.removeItem("myToken");
  //delete instance.defaults.headers.common.Authorization = `Bearer ${token}`;\

  return {
    type: types.SET_USER,
    payload: { userData: null },
  };
};

export const signIn = (userData, navigation) => async (dispatch) => {
  try {
    const res = await instance.post("/signin", userData);
    dispatch(setUser(res.data.token));
    await AsyncStorage.setItem("myToken", res.data.token);
    navigation.replace("Home");
    dispatch({
      type: types.SET_USER,
      payload: { userData: decode(res.data.token) },
    });
  } catch (error) {
    console.log(error);
  }
};

const setUser = (token) => {
  AsyncStorage.setItem("myToken", token);
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  return {
    type: types.SET_USER,
    payload: { userData: decode(token) },
  };
};

export const checkForToken = () => async (dispatch) => {
  const token = await AsyncStorage.getItem("myToken");

  if (token) {
    const user = decode(token);
    if (user.exp > Date.now()) {
      dispatch(setUser(token));
    } else {
      dispatch(signout);
    }
  }
};
