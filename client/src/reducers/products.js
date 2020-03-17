import {
  FETCH_PRODUCTS,
  ADD_PRODUCT,
  FETCH_PRODUCTS_BY_ID,
  DELETE_PRODUCT,
  UPDATE_PRODUCT
} from "../actions/types";

const initialState = {
  products: []
};

const initialProductState = {
  product: []
};
//reducer for products
export const products = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      // debugger;
      return { ...state, products: action.payload };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          product => product._id !== action.payload
        )
      };

    default:
      return state;
  }
};

//reducer for product
export const product = (state = initialProductState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      // debugger;
      return { ...state, product: action.payload };
    case FETCH_PRODUCTS_BY_ID:
      // debugger;
      return { ...state, product: action.payload };
    case UPDATE_PRODUCT:
      return {
        ...state,
        product: state.product.map(product =>
          product._id === action.payload._id ? action.payload : product
        )
      };
    default:
      return state;
  }
};
