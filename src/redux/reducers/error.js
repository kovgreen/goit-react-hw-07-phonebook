import {
  ERROR_POST_REQUEST,
  ERROR_DELETE_REQUEST,
  ERROR_RESET,
  ERROR_SET_CONTACTS,
} from "../types";

const initialState = false;

export default (state = initialState, { type }) => {
  switch (type) {
    case ERROR_POST_REQUEST:
    case ERROR_DELETE_REQUEST:
    case ERROR_SET_CONTACTS:
      return true;
    case ERROR_RESET:
      return false;

    default:
      return state;
  }
};
