import { FETCH_CATEGORIES, ADD_CATEGORY } from "../actions/types";

const initialState = {
  categories: []
};

const initialCategoryState = {
  category: []
};

//reducer for categories
export const categories = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      // debugger;
      return { ...state, categories: action.payload };
    default:
      return state;
  }
};

//reducer for category
export const category = (state = initialCategoryState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      // debugger;
      return { ...state, category: action.payload };

    default:
      return state;
  }
};
