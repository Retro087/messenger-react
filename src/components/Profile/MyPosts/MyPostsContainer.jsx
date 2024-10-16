import React from "react";
import { connect } from "react-redux";
import {
  addPostAC,
  disLikePostAC,
  likePostAC,
  updateNewPostTextAC,
} from "../../../redux/profile-reducer.ts";
import MyPosts from "./MyPosts";

let MapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
    userProfile: state.auth.userProfle,
  };
};

let MapDispatchToProps = (dispatch) => {
  return {
    addPost() {
      dispatch(addPostAC());
    },

    onPostChange(text) {
      dispatch(updateNewPostTextAC(text));
    },

    addLike(id) {
      dispatch(likePostAC(id));
    },

    disLike(id) {
      dispatch(disLikePostAC(id));
    },
  };
};

const MyPostsContainer = connect(MapStateToProps, MapDispatchToProps)(MyPosts);

export default MyPostsContainer;
