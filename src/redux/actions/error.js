import {
  ERROR_POST_REQUEST,
  ERROR_DELETE_REQUEST,
  ERROR_SET_CONTACTS,
  ERROR_RESET,
} from "../types";

export const setPostRequestError = () => ({
  type: ERROR_POST_REQUEST,
});

export const setDeleteRequestError = () => ({
  type: ERROR_DELETE_REQUEST,
});

export const setSetContactsError = () => ({
  type: ERROR_SET_CONTACTS,
});

export const errorReset = () => ({
  type: ERROR_RESET,
});
