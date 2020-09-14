import {
  ADD_REQUEST,
  ADD_SUCCESS,
  DELETE_REQUEST,
  DELETE_SUCCESS,
} from "../types";

export const activeAddLoader = () => ({
  type: ADD_REQUEST,
});

export const inactiveAddLoader = () => ({
  type: ADD_SUCCESS,
});

export const activeDeleteLoader = () => ({
  type: DELETE_REQUEST,
});

export const inactiveDeleteLoader = () => ({
  type: DELETE_SUCCESS,
});
