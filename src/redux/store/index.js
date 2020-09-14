import { applyMiddleware, createStore } from "redux";
import {
  //   devToolsEnhancer,
  composeWithDevTools,
} from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

const middleware = [thunk];
const compose = composeWithDevTools(applyMiddleware(...middleware));

const globalSate = createStore(rootReducer, compose);

export default globalSate;
