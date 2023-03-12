import { createStore } from "redux";
import { note } from "./action";

export const storeNotes = createStore(
  note,
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
