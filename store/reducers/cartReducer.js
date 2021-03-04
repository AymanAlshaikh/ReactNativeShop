import * as types from "../actions/types";

const initialState = {
  items: [
    // { productId: 1, quantity: 0 },
    // { productId: 3, quantity: 0 },
    // { productId: 4, quantity: 0 },
    // { productId: 5, quantity: 0 },
  ], //cartData,
  loading: true,
};
// found.quantity += newItem.quantity,
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_CART:
      return { ...state, cart: action.payload, loading: false };

    case types.ADD_ITEM:
      const newItem = action.payload;
      const found = state.items.find(
        (item) => item.productId === newItem.productId
      );
      if (found)
        return {
          ...state,
          items: state.items.map((item) => (item === found ? newItem : item)),
        };
      else
        return {
          ...state,
          items: [...state.items, newItem],
        };
    case types.DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.productId !== action.payload),
      };
    case types.CHECKOUT:
      return {
        ...state,
        items: [],
      };

    default:
      return state;
  }
};

export default cartReducer;
