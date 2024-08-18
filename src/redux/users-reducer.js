import { usersAPI } from "../components/api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const SET_FOLLOWING_IN_PROGRESS = "SET_FOLLOWING_IN_PROGRESS";
const SET_ONLY_FRIENDS = "SET_ONLY_FRIENDS";
const SET_NAME_SEARCH = "SET_NAME_SEARCH";
let initialState = {
  users: [],
  pageSize: 4,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
  onlyFriends: false,
  nameSearch: "",
};

let UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (action.id === u.id) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (action.id === u.id) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return { ...state, users: action.users };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.totalCount };
    case SET_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case SET_FOLLOWING_IN_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    case SET_ONLY_FRIENDS:
      return {
        ...state,
        onlyFriends: action.onlyFriends,
      };
    case SET_NAME_SEARCH:
      return {
        ...state,
        nameSearch: action.name,
      };
    default:
      return state;
  }
};

export const followSuccess = (id) => ({ type: FOLLOW, id });
export const unfollowSuccess = (id) => ({ type: UNFOLLOW, id });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (pageNumber) => ({
  type: SET_CURRENT_PAGE,
  currentPage: pageNumber,
});
export const setTotalUsersCount = (totalCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalCount,
});
export const setIsFetching = (isFetching) => ({
  type: SET_IS_FETCHING,
  isFetching,
});
export const setFollowingInProgress = (userId, isFetching) => ({
  type: SET_FOLLOWING_IN_PROGRESS,
  userId,
  isFetching,
});
export const setOnlyFriends = (onlyFriends) => ({
  type: SET_ONLY_FRIENDS,
  onlyFriends,
});
export const setNameSearch = (name) => ({ type: SET_NAME_SEARCH, name });
export const getUsers = (currentPage, pageSize, onlyFriends, name) => {
  return (dispatch) => {
    dispatch(setIsFetching(true));
    usersAPI.getUsers(currentPage, pageSize, onlyFriends, name).then((data) => {
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
      dispatch(setOnlyFriends(onlyFriends));
      dispatch(setNameSearch(name));
      dispatch(setIsFetching(false));
    });
  };
};
export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(setFollowingInProgress(userId, true));
    usersAPI.unfollowUser(userId).then((response) => {
      if (response.resultCode === 0) {
        dispatch(unfollowSuccess(userId));
      }
      dispatch(setFollowingInProgress(userId, false));
    });
  };
};
export const follow = (userId) => {
  return (dispatch) => {
    dispatch(setFollowingInProgress(userId, true));
    usersAPI.followUser(userId).then((response) => {
      if (response.resultCode === 0) {
        dispatch(followSuccess(userId));
      }
      dispatch(setFollowingInProgress(userId, false));
    });
  };
};
export default UsersReducer;
