import axios from "axios";
import instance from "./instance";
// ACTION TYPES
import * as types from "./types";

// ACTIONS
export const addProduct = (newProduct) => async (dispatch) => {
  try {
    const formData = new FormData();
    for (const key in newProduct) formData.append(key, newProduct[key]);
    const res = await instance.post(
      `/shops/${newProduct.shopId}/data`,
      formData
    );
    dispatch({
      type: types.ADD_PRODUCT,
      payload: { newProduct: res.data },
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = (productId) => async (dispatch) => {
  try {
    await instance.delete(`/data/${productId}`);
    dispatch({ type: types.DELETE_PRODUCT, payload: { productId: productId } });
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = (updatedProduct) => async (dispatch) => {
  try {
    const formData = new FormData();
    for (const key in updatedProduct) formData.append(key, updatedProduct[key]);
    const res = await instance.put(`/data/${updatedProduct.id}`, formData);

    dispatch({
      type: types.UPDATE_PRODUCT,
      payload: { updatedProduct: res.data },
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchProduct = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/data");
      dispatch({ type: types.FETCH_PRODUCT, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
};
