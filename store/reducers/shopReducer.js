import * as types from "../actions/types";

const initialState = {
  shop: [], //shopData,
  loading: true
};

const shopReducer = (state = initialState, action,) => {
  switch (action.type) {

    case types.FETCH_SHOP:

      return { ...state, shop: action.payload, loading: false };
    default:
      return state;
  }
};

export default shopReducer;
