import { ADD_CONTACT, DELETE_CONTACT, SET_CONTACT } from "../types";
import axios from "axios";
import {
  activeAddLoader,
  inactiveAddLoader,
  activeDeleteLoader,
  inactiveDeleteLoader,
  activeSetLoader,
  inactiveSetLoader,
} from "./loader";
import {
  setPostRequestError,
  setDeleteRequestError,
  setSetContactsError,
  errorReset,
} from "./error";

export const addContact = (data) => ({
  type: ADD_CONTACT,
  payload: data,
});

export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: id,
});

export const setContactList = (contacts) => ({
  type: SET_CONTACT,
  payload: contacts,
});

const option = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const asyncAddContact = ({ name, number }) => async (dispatch) => {
  dispatch(activeAddLoader());
  const contact = { name, number };
  try {
    dispatch(errorReset());
    const result = await axios.post(
      "http://localhost:5001/contacts",
      contact,
      option
    );
    dispatch(addContact(result.data));
  } catch (error) {
    dispatch(setPostRequestError());
  } finally {
    dispatch(inactiveAddLoader());
  }
};

export const asyncDeleteContact = (id) => async (dispatch) => {
  dispatch(activeDeleteLoader());
  try {
    dispatch(errorReset());
    await axios.delete(`http://localhost:5001/contacts/${id}`);
    dispatch(deleteContact(id));
  } catch (error) {
    dispatch(setDeleteRequestError());
  } finally {
    dispatch(inactiveDeleteLoader());
  }
  //   await axios
  //     .delete(`http://localhost:5001/contacts/${id}`)
  //     .then((res) => dispatch(deleteContact(id)))
  //     .catch((error) => dispatch(setDeleteRequestError()))
  //     .finally(() => dispatch(inactiveDeleteLoader()));
};

export const asyncSetContactList = () => async (dispatch) => {
  dispatch(activeSetLoader());
  try {
    dispatch(errorReset());
    const result = await axios.get(`http://localhost:5001/contacts`);
    dispatch(setContactList(result.data));
  } catch (error) {
    dispatch(setSetContactsError());
  } finally {
    dispatch(inactiveSetLoader());
  }
};
