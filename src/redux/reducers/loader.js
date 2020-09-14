import {
  ADD_REQUEST,
  ADD_SUCCESS,
  DELETE_REQUEST,
  DELETE_SUCCESS,
} from "../types";

const initialState = false;

export default (state = initialState, { type }) => {
  switch (type) {
    case ADD_REQUEST:
    case DELETE_REQUEST:
      return true;

    case ADD_SUCCESS:
    case DELETE_SUCCESS:
      return false;

    default:
      return state;
  }
};
