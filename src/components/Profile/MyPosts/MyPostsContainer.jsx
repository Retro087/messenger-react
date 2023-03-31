import React from "react"
import { connect } from "react-redux";
import { addPostAC, updateNewPostTextAC } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


let MapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}   

let MapDispatchToProps = (dispatch) => {
    return {
        addPost(){
            dispatch(addPostAC())
        },

        onPostChange(text){
            dispatch(updateNewPostTextAC(text))
        }
    }
}

const MyPostsContainer = connect(MapStateToProps, MapDispatchToProps)(MyPosts)

export default MyPostsContainer