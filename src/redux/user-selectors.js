export const getAllUsers = (state) => {
  return state.usersPage.users;
};
export const getPageSize = (state) => {
  return state.usersPage.pageSize;
};
export const getTotalUsersCount = (state) => {
  return state.usersPage.totalUsersCount;
};
export const getCurrentPage = (state) => {
  return state.usersPage.currentPage;
};
export const getIsFetching = (state) => {
  return state.usersPage.isFetching;
};
export const getFollowingInProgress = (state) => {
  return state.usersPage.followingInProgress;
};
export const getOnlyFriends = (state) => {
  return state.usersPage.onlyFriends;
};
export const getNameSearch = (state) => {
  return state.usersPage.nameSearch;
};
