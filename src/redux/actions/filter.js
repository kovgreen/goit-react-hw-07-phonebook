import { FILTER_CONTACTS } from "../types";

export const filterContacts = filter => ({
  type: FILTER_CONTACTS,
  payload: filter
});
