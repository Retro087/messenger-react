import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import dialogsReducer from "./dialogs-reducer.ts";
import profileReducer from "./profile-reducer.ts";
import UsersReducer from "./users-reducer";
import authReducer from "./auth-reducer.ts";
import thunkMiddleWare from "redux-thunk";
import appReducer from "./app-reducer.ts";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: UsersReducer,
  auth: authReducer,
  appReducer: appReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

export default store;
