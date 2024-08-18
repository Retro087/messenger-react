import { authAPI, profileAPI } from "../components/api/api";

const SET_AUTH_DATA = "SET_AUTH_DATA";
const SET_AUTH_PROFILE = "SET_AUTH_PROFILE";

let initialState = {
  login: null,
  email: null,
  id: null,
  isAuth: false,
  userProfile: null,
};

let authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_DATA:
      return {
        ...state,
        ...action.data,
      };
    case SET_AUTH_PROFILE:
      return {
        ...state,
        userProfile: action.profile,
      };
    default:
      return state;
  }
};

export default authReducer;
export let setAuthData = (id, login, email, isAuth) => ({
  type: SET_AUTH_DATA,
  data: { email, login, id, isAuth },
});
export let setAuthProfile = (profile) => ({ type: SET_AUTH_PROFILE, profile });
export let auth = () => {
  return (dispatch) => {
    authAPI.authMe().then((response) => {
      if (response.resultCode === 0) {
        let { id, login, email } = response.data;
        dispatch(setAuthData(id, login, email, true));
        profileAPI.getProfile(id).then((response) => {
          dispatch(setAuthProfile(response));
        });
      }
    });
  };
};
export let authorized = (email, password) => {
  return (dispatch) => {
    authAPI.logIn(email, password).then((response) => {
      if (response.resultCode === 0) {
        dispatch(auth());
      }
    });
  };
};

export let logOut = () => {
  return (dispatch) => {
    authAPI.logOut().then((response) => {
      if (response.resultCode === 0) {
        dispatch(setAuthData(null, null, null, false));
      }
    });
  };
};
