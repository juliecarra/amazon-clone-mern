import { FETCH_OWNERS, ADD_OWNER } from "../actions/types";

const initialState = {
  owners: []
};

const initialOwnerState = {
  owner: []
};

//reducer for owners
export const owners = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_OWNERS:
      // debugger;
      return { ...state, owners: action.payload };
    default:
      return state;
  }
};

//reducer for owners
export const owner = (state = initialOwnerState, action) => {
  switch (action.type) {
    case ADD_OWNER:
      // debugger;
      return { ...state, owner: action.payload };
    default:
      return state;
  }
};
