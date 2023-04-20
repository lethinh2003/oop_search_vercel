import { combineReducers } from "redux";
import _darkModeReducer from "./_darkModeReducer";
import _navigationReducer from "./_navigationReducer";
const reducers = combineReducers({
  darkMode: _darkModeReducer,
  navigation: _navigationReducer,
});

export default (state, action) => reducers(state, action);
