import { photoAPI, profileAPI, statusAPI } from "../components/api/api.js";
import { photoPhotosType, userProfileType } from "../components/types/types.ts";
import { setAuthPhoto } from "./auth-reducer.ts";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const LIKE = "LIKE";
const DISLIKE = "DISLIKE";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const SET_PHOTO = "SET_PHOTO";

type postType = {
  id: number
  name: string
  message: string
  likes: number
  liked: boolean
}


let initialState = {
  posts: [
    { id: 1, name: "Vladimir", message: "hello", likes: 0, liked: false },
    { id: 2, name: "Dimon", message: "first post)", likes: 0, liked: false },
  ] as Array<postType>,
  newPostText: "",
  userProfile: null as userProfileType | null ,
  userStatus: null as null | string,
};

type InitialStateType =  typeof initialState

let profileReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case ADD_POST:
      let i = state.posts.length - 1;
      let post = {
        id: state.posts[i].id + 1,
        message: state.newPostText,
        name: "Vova",
        likes: 0,
        liked: false
      };

      return {
        ...state,
        posts: [...state.posts, post],
        newPostText: "",

      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.text,
      };
    case LIKE:
      return {
        ...state,
        posts: state.posts.map((el) => {
          if (el.id === action.postId) {
            let likes = el.likes + 1;
            return { ...el, likes: likes, liked: true };
          }
          return el;
        }),
      };
    case DISLIKE:
      return {
        ...state,
        posts: state.posts.map((el) => {
          if (el.id === action.postId) {
            let likes = el.likes - 1;
            return { ...el, likes: likes, liked: false };
          }
          return el;
        }),
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.userProfile,
      };
    case SET_STATUS:
      return {
        ...state,
        userStatus: action.status,
      };
    case SET_PHOTO:
      return {
        ...state,
        userProfile: { ...state.userProfile, photos: action.photos },
      };
    default:
      return state;
  }
};

export default profileReducer;

type addPostACType = {
  type: typeof ADD_POST
}
export let addPostAC = (): addPostACType => ({ type: ADD_POST });

type updateNewPostTextACType = {
  type: typeof UPDATE_NEW_POST_TEXT
  text: string
}
export let updateNewPostTextAC = (text: string): updateNewPostTextACType => ({
  type: UPDATE_NEW_POST_TEXT,
  text: text,
});

type likePostACType = {
  type: typeof LIKE
  postId: number
}
export let likePostAC = (postId: number): likePostACType => ({ type: LIKE, postId });

type disLikePostACType = {
  type: typeof DISLIKE
  postId: number
}
export let disLikePostAC = (postId: number): disLikePostACType=> ({ type: DISLIKE, postId });


type setUserProfileType = {
  type: typeof SET_USER_PROFILE
  userProfile: userProfileType
}
export let setUserProfile = (userProfile: userProfileType): setUserProfileType => ({
  type: SET_USER_PROFILE,
  userProfile,
});

type setStatusType = {
  type: typeof SET_STATUS
  status: string
}
export let setStatus = (status: string): setStatusType => ({ type: SET_STATUS, status });

type setPhotoType = {
  type: typeof SET_PHOTO
  photos: photoPhotosType
}
export let setPhoto = (photos: photoPhotosType): setPhotoType => ({ type: SET_PHOTO, photos });

export let getProfile = (id: number) => {
  return (dispatch: any) => {
    profileAPI.getProfile(id).then((data) => {
      dispatch(setUserProfile(data));
    });
  };
};
export let getStatus = (id: number) => {
  return (dispatch: any) => {
    statusAPI.getStatus(id).then((data) => {
      dispatch(setStatus(data));
    });
  };
};

export let updateStatus = (status: string) => {
  return (dispatch: any) => {
    statusAPI.setStatus(status).then((data) => {
      if (data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  };
};

export let updatePhoto = (photos: any) => {
  return (dispatch: any) => {
    photoAPI.setPhoto(photos).then((data) => {
      if (data.resultCode === 0) {
        dispatch(setPhoto(data.data.photos));
        dispatch(setAuthPhoto(data.data.photos));
      }
    });
  };
};
