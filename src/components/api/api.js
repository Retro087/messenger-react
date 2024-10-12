import axios from "axios";

let instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "e01c183a-da15-448a-9e2a-1db9b20adc18",
    "Content-Type": "application/json",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 4, onlyFriends, name) {
    return instance
      .get(
        `users?page=${currentPage}&count=${pageSize}&friend=${onlyFriends}&term=${name}`
      )
      .then((response) => {
        return response.data;
      });
  },
  followUser(userId) {
    return instance.post(`follow/${userId}`).then((response) => response.data);
  },
  unfollowUser(userId) {
    return instance
      .delete(`follow/${userId}`)
      .then((response) => response.data);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then((response) => response.data);
  },
};

export const authAPI = {
  authMe() {
    return instance.get(`auth/me`).then((response) => response.data);
  },
  logIn(email, password, rememberMe = false) {
    return instance
      .post(`auth/login`, { email, password, rememberMe })
      .then((responce) => responce.data);
  },
  logOut() {
    return instance.delete(`auth/login`).then((response) => response.data);
  },
};

export const statusAPI = {
  getStatus(id) {
    return instance
      .get(`profile/status/${id}`)
      .then((response) => response.data);
  },
  setStatus(status) {
    return instance
      .put(`profile/status/`, { status: status })
      .then((response) => response.data);
  },
};

export const photoAPI = {
  setPhoto(photos) {
    const formData = new FormData();
    formData.append("image", photos);
    return instance
      .put(`profile/photo`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => response.data);
  },
};
