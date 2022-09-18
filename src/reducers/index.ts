import { combineReducers } from "@reduxjs/toolkit";
import collectionReducer from "./collection";
import userReducer from "./user";

export default combineReducers({
    userReducer,
    collectionReducer
})