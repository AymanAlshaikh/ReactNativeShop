import * as types from "./types";

export const addItem = (newItem) => ({
  type: types.ADD_ITEM,
  payload: newItem,
});
// export const addItem = (newItem) => async (dispatch) => {
//   try {
//     dispatch({
//       type: types.ADD_ITEM,
//       payload: { newItem: newItem },
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

export const removeItem = (itemId) => ({
  type: types.DELETE_ITEM,
  payload: itemId,
});

export const checkOut = () => ({
  type: types.CHECKOUT,
});
