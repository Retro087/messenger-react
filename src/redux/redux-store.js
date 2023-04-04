import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import UsersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleWare from "redux-thunk";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: UsersReducer,
    auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleWare))

export default store