import axios from "axios";
import instance from "./instance";
// ACTION TYPES
import * as types from "./types";

// ACTIONS
// export const addShop = (newShop) => async (dispatch) => {
//   try {
//     const formData = new FormData();
//     for (const key in newShop) formData.append(key, newShop[key]);
//     const res = await instance.post(`/shops`, formData);
//     dispatch({
//       type: types.ADD_SHOP,
//       payload: { newShop: res.data },
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

export const fetchShop = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/shops");
      dispatch({ type: types.FETCH_SHOP, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateShop = (updatedShop) => async (dispatch) => {
  try {
    const formData = new FormData();
    for (const key in updatedShop) formData.append(key, updatedShop[key]);
    const res = await instance.put(`/data/${updatedShop.id}`, formData);

    dispatch({
      type: types.UPDATE_PRODUCT,
      payload: { updatedShop: res.data },
    });
  } catch (error) {
    console.log(error);
  }
};
