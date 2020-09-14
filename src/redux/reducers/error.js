import {
  ERROR_POST_REQUEST,
  ERROR_DELETE_REQUEST,
  ERROR_RESET,
} from "../types";

const initialState = false;

export default (state = initialState, { type }) => {
  switch (type) {
    case ERROR_POST_REQUEST:
    case ERROR_DELETE_REQUEST:
      return true;
    case ERROR_RESET:
      return false;

    default:
      return state;
  }
};
