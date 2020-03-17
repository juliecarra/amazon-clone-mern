import { ADD_REVIEW, FETCH_REVIEWS } from "../actions/types";

const initialReviewsState = { reviews: [] };

const initialState = {
  review: []
};

export const reviews = (state = initialReviewsState, action) => {
  switch (action.type) {
    case FETCH_REVIEWS:
      // debugger;
      return { ...state, reviews: action.payload };
    default:
      return state;
  }
};

//reducer for review
export const review = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REVIEW:
      // debugger;
      return { ...state, review: action.payload };

    default:
      return state;
  }
};
