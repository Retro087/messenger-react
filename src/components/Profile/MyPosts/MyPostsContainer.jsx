import React from "react"
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";



function MyPostsContainer(props) {

    let posts = props.store.getState().profilePage.posts

    let newPostText = props.store.getState().profilePage.NewPostText

    function addPost(){
        props.store.dispatch(addPostActionCreator())
    }

    function onPostChange(text){
        props.store.dispatch(updateNewPostTextActionCreator(text))
    }
    
    return <MyPosts posts={posts} addPost={addPost} onPostChange={onPostChange} NewPostText={newPostText}/>
    
}

export default MyPostsContainer