import * as types from "../actions/types";

const initialState = {
  items: [
    { productId: 1, quantity: 10 },
    { productId: 3, quantity: 8 },
    { productId: 4, quantity: 4 },
    { productId: 5, quantity: 2 },
  ], //cartData,
  loading: true,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_CART:
      return { ...state, cart: action.payload, loading: false };
    default:
      return state;
  }
};

export default cartReducer;
export const addItemToCart = (newItem) => {
  const foundItem = this.items.find(
    (item) => item.productId === newItem.productId
  );
  if (foundItem) foundItem.quantity += newItem.quantity;
  else this.items.push(newItem);
};
