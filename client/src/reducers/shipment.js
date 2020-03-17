import { HANDLE_SHIPMENT, CHOOSE_SHIPMENT } from "../actions/types";

const initialState = {
  shipment: []
};

//reducer for shipment
export const shipment = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_SHIPMENT:
      //   debugger;
      return { ...state, shipment: action.payload };
    case CHOOSE_SHIPMENT:
      return { ...state, shipment: action.payload };

    default:
      return state;
  }
};
