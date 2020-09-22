import {
  ADD_REQUEST_START,
  ADD_REQUEST_SUCCESS,
  DELETE_REQUEST_START,
  DELETE_REQUEST_SUCCESS,
  SET_CONTACTS_REQUEST_START,
  SET_CONTACTS_REQUEST_SUCCESS,
} from "../types";

const initialState = false;

export default (state = initialState, { type }) => {
  switch (type) {
    case ADD_REQUEST_START:
    case DELETE_REQUEST_START:
    case SET_CONTACTS_REQUEST_START:
      return true;

    case ADD_REQUEST_SUCCESS:
    case DELETE_REQUEST_SUCCESS:
    case SET_CONTACTS_REQUEST_SUCCESS:
      return false;

    default:
      return state;
  }
};
