import { authAPI, profileAPI } from "../components/api/api";
import { photoPhotosType } from "../components/types/types";

const SET_AUTH_DATA = "SET_AUTH_DATA";
const SET_AUTH_PROFILE = "SET_AUTH_PROFILE";
const SET_AUTH_PHOTO = "SET_AUTH_PHOTO";

type InitialStateType = {
  login: null | string
  email: null | string
  id: null | number
  isAuth: boolean
  userProfile: null | object
}

let initialState: InitialStateType = {
  login: null,
  email: null,
  id: null,
  isAuth: false,
  userProfile: null,
};

let authReducer = (state = initialState, action: any): InitialStateType => {
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
    case SET_AUTH_PHOTO:
      return {
        ...state,
        userProfile: { ...state.userProfile, photos: action.photos },
      };
    default:
      return state;
  }
};

export default authReducer;
type setAuthDataPayloadType = {
  email: string | null
  login: string | null
  id: number | null
  isAuth: boolean | null
}
type setAuthDataType = {
  type: typeof SET_AUTH_DATA,
  data: setAuthDataPayloadType
}
export let setAuthData = (id: number | null, login: string | null, email: string | null, isAuth: boolean | null): setAuthDataType => ({
  type: SET_AUTH_DATA,
  data: { email, login, id, isAuth,  },
});

type setAuthProfileType = {
  type: typeof SET_AUTH_PROFILE
  profile: {}
}


type setPhotoType = {
  type: typeof SET_AUTH_PHOTO
  photos: photoPhotosType 
}
export let setAuthProfile = (profile: {}): setAuthProfileType => ({ type: SET_AUTH_PROFILE, profile });

export let setAuthPhoto = (photos: photoPhotosType): setPhotoType => ({ type: SET_AUTH_PHOTO, photos });

export let auth = () => {
  return (dispatch: any) => {
    return authAPI.authMe().then((response) => {
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

export let authorized = (email: string, password: string) => {
  return (dispatch: any) => {
    authAPI.logIn(email, password).then((response) => {
      if (response.resultCode === 0) {
        dispatch(auth());
      }
    });
  };
};

export let logOut = () => {
  return (dispatch: any) => {
    authAPI.logOut().then((response) => {
      if (response.resultCode === 0) {
        dispatch(setAuthData(null, null, null, false));
      }
    });
  };
};
