import { createStore } from "redux";
import { counterReducer } from "./action";

export const storeCounter = createStore(
  counterReducer,
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
