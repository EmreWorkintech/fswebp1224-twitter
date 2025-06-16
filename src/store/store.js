import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { tweetReducer } from "./reducers/tweetReducer";
import { thunk } from "redux-thunk";

export const myStore = createStore(tweetReducer, applyMiddleware(thunk));
