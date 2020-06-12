import axios from "axios";

import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_BY_ID,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  FETCH_CATEGORIES,
  ADD_CATEGORY,
  FETCH_OWNERS,
  ADD_OWNER,
  SET_CURRENT_USER,
  UPDATE_PROFILE,
  FETCH_REVIEWS,
  ADD_REVIEW,
  ADD_ADDRESS,
  FETCH_ADDRESSES,
  DELETE_ADDRESS,
  ADD_TO_CART,
  GET_CART,
  REMOVE_ITEM_FROM_CART,
  HANDLE_SHIPMENT,
  CHOOSE_SHIPMENT,
  CLEAR_CART,
  FETCH_ORDERS,
} from "./types";

import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

export const fetchProducts = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/products");

    dispatch({ type: FETCH_PRODUCTS, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const fetchProductsById = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/products/${id}`);
    dispatch({ type: FETCH_PRODUCTS_BY_ID, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const addProduct = (productData) => async (dispatch) => {
  try {
    const res = await axios.post("/api/products", productData);

    dispatch({ type: ADD_PRODUCT, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = (id, product) => async (dispatch) => {
  try {
    const res = await axios.patch(`/api/products/${id}`, product);

    dispatch({
      type: UPDATE_PRODUCT,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.response.message);
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/products/${id}`);
    dispatch({
      type: DELETE_PRODUCT,
      payload: id,
    });
  } catch (error) {
    console.log(error);
  }
};

// Categories actions

export const fetchCategories = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/categories");
    // debugger;
    dispatch({ type: FETCH_CATEGORIES, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const addCategory = (categoryData) => async (dispatch) => {
  try {
    const res = await axios.post("/api/categories", categoryData);
    // debugger;
    dispatch({ type: ADD_CATEGORY, payload: res.data });
  } catch (error) {
    console.log(error.response.data);
  }
};

export const fetchOwners = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/owners");

    dispatch({ type: FETCH_OWNERS, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const addOwner = (ownerData) => async (dispatch) => {
  try {
    const res = await axios.post("/api/owners", ownerData);

    dispatch({ type: ADD_OWNER, payload: res.data });
  } catch (error) {
    console.log(error.response.data);
  }
};

// User actions

export const signupUser = (userData, history) => async (dispatch) => {
  try {
    await axios.post("/api/auth/signup", userData);
    history.push("/login");
  } catch (error) {
    console.error(error.response.data.message);
  }
};

export const loginUser = (userData) => async (dispatch) => {
  try {
    const res = await axios.post("/api/auth/login", userData);

    // Save to localStorage
    const { token } = res.data;
    // Set token to ls
    localStorage.setItem("jwtToken", token);
    // Set token to Auth header
    setAuthToken(token);
    // Decode token to get user data
    const decoded = jwt_decode(token);
    // Set current user
    dispatch(setCurrentUser(decoded));
  } catch (error) {
    console.log(error);
  }
};

export const currentUser = (id) => async (dispatch) => {
  try {
    await axios.get(`/user/${id}`);
    localStorage.getItem("jwtToken");
  } catch (error) {
    console.log(error);
  }
};

export const logoutUser = () => (dispatch) => {
  // Remove token from localStorage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};

export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

export const updateProfile = (id, user) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/auth/user/${id}`, user);

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.response);
  }
};

// Review actions
export const fetchProductReviews = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/reviews/product/${id}`);
    dispatch({ type: FETCH_REVIEWS, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const addReview = (reviewData, id) => async (dispatch) => {
  try {
    const res = await axios.post(`/api/reviews/product/${id}`, reviewData);

    dispatch({ type: ADD_REVIEW, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

// Address actions
export const addAddress = (addressData) => async (dispatch) => {
  try {
    const res = await axios.post("/api/addresses", addressData);

    dispatch({ type: ADD_ADDRESS, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const fetchAddresses = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/addresses");

    dispatch({ type: FETCH_ADDRESSES, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteAddress = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/addresses/${id}`);
    dispatch({
      type: DELETE_ADDRESS,
      payload: id,
    });
  } catch (error) {
    console.log(error);
  }
};

// Cart actions
export const addToCart = (cartItem) => (dispatch) => {
  dispatch({
    type: ADD_TO_CART,
    payload: cartItem,
  });
};

export const getCart = () => (dispatch) => {
  dispatch({
    type: GET_CART,
    payload: JSON.parse(localStorage.getItem("Cart")),
  });
};

export const removeFromCart = (id) => (dispatch) => {
  dispatch({
    type: REMOVE_ITEM_FROM_CART,
    payload: id,
  });
};

export const clearCart = () => (dispatch) => {
  dispatch({
    type: CLEAR_CART,
    payload: JSON.parse(localStorage.removeItem("Cart")),
  });
};

//Shipment actions
export const handleShipment = () => async (dispatch) => {
  try {
    const res = await axios.post("/api/payments/shipment", {
      shipment: "normal",
    });

    dispatch({ type: HANDLE_SHIPMENT, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const chooseShipment = (shipment) => async (dispatch) => {
  try {
    const res = await axios.post("/api/payments/shipment", {
      shipment: shipment,
    });

    dispatch({ type: CHOOSE_SHIPMENT, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const handlePayment = (totalPrice) => async (dispatch) => {
  try {
    const res = await axios.post("/api/payments", { totalPrice: totalPrice });

    dispatch({ payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

//Order actions
export const fetchOrders = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/orders");

    dispatch({ type: FETCH_ORDERS, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
