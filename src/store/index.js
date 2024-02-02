import { createStore, applyMiddleware } from "redux";
import { todoReducer } from "./reducers/todoReducer";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
  todoReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
