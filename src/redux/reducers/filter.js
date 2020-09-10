import { FILTER_CONTACTS } from "../types";

const initialState = "";

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_CONTACTS:
      return action.payload;

    default:
      return state;
  }
};
