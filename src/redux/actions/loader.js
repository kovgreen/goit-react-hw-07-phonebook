import {
  ADD_REQUEST_START,
  ADD_REQUEST_SUCCESS,
  DELETE_REQUEST_START,
  DELETE_REQUEST_SUCCESS,
  SET_CONTACTS_REQUEST_START,
  SET_CONTACTS_REQUEST_SUCCESS,
} from "../types";

export const activeAddLoader = () => ({
  type: ADD_REQUEST_START,
});

export const inactiveAddLoader = () => ({
  type: ADD_REQUEST_SUCCESS,
});

export const activeDeleteLoader = () => ({
  type: DELETE_REQUEST_START,
});

export const inactiveDeleteLoader = () => ({
  type: DELETE_REQUEST_SUCCESS,
});

export const activeSetLoader = () => ({
  type: SET_CONTACTS_REQUEST_START,
});

export const inactiveSetLoader = () => ({
  type: SET_CONTACTS_REQUEST_SUCCESS,
});
