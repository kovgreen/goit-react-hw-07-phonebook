import { combineReducers } from "redux";
import { contactsReducer } from "./contacts";
import { filterReducer } from "./filter";
import error from "./error";
import loader from "./loader";

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  loader,
  error,
});

export default rootReducer;
