import { createSelector } from "reselect";

export const constactsSelector = (state) => state.contacts;
export const filterSelector = (state) => state.filter;
export const loaderSelector = (state) => state.loader;
export const errorSelector = (state) => state.error;

export const filteredContactSelector = createSelector(
  [constactsSelector, filterSelector],
  (contacts, filterValue) => {
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filterValue.toLowerCase().trim()) ||
        contact.number.includes(filterValue.trim())
    );
  }
);
