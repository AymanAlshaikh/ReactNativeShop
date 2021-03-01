import * as types from "../actions/types";

const initialState = {
  products: [], //productsData,
  loading: true
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_PRODUCT:
      const { newProduct } = action.payload;

      return {
        ...state,
        products: [...state.products, newProduct],
      };
    case types.DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload.productId
        ),
      };
    case types.UPDATE_PRODUCT:
      const { updatedProduct } = action.payload;
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === updatedProduct.id ? updatedProduct : product
        ),
      };
    case types.FETCH_PRODUCT:
      return { ...state, products: action.payload, loading: false };
    default:
      return state;
  }
};

export default productReducer;
