import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducer from "../reducers";

const globalSate = createStore(rootReducer, devToolsEnhancer());

export default globalSate;
