import isEmpty from "../validation/is-empty";

import { SET_CURRENT_USER, UPDATE_PROFILE } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  user: {}
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        user: state.user.map(u =>
          u._id === action.payload._id ? action.payload : u
        )
      };
    default:
      return state;
  }
};
