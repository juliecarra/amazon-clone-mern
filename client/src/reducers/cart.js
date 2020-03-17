import {
  ADD_TO_CART,
  GET_CART,
  REMOVE_ITEM_FROM_CART,
  CLEAR_CART
} from "../actions/types";

const initialState = {
  cart: []
};

//reducer for cart
export const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let cartState = JSON.parse(localStorage.getItem("Cart"));
      cartState = cartState ? cartState : [];

      localStorage.setItem(
        "Cart",
        JSON.stringify([...cartState, action.payload])
      );

      return {
        ...state,
        cart: JSON.parse(localStorage.getItem("Cart"))
      };

    case GET_CART:
      return {
        ...state,
        cart: action.payload
      };

    case REMOVE_ITEM_FROM_CART:
      JSON.parse(localStorage.getItem("Cart"));

      localStorage.setItem(
        "Cart",
        JSON.stringify([
          ...state.cart.filter(cartItem => cartItem._id !== action.payload)
        ])
      );
      return {
        ...state,
        cart: JSON.parse(localStorage.getItem("Cart"))
      };
    case CLEAR_CART:
      // return {
      //   ...state,
      //   cart: action.payload
      // };
      return {
        ...state,
        cart: action.payload
      };
    default:
      return state;
  }
};
