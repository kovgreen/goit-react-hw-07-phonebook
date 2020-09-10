import { ADD_CONTACT, DELETE_CONTACT, UPLOAD_CONTACT_LIST } from "../types";

const initialState = [];
export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.payload];
    case DELETE_CONTACT:
      return state.filter(contact => contact.id !== action.payload);
    case UPLOAD_CONTACT_LIST:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
