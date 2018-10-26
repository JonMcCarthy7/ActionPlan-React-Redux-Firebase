import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import { combineReducers } from "redux";

// Combines reducers
const rootReducter = combineReducers({
  auth: authReducer,
  project: projectReducer
});

export default rootReducter;
