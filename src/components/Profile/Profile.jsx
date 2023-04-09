import React from "react"
import MyPostsContainer from "./MyPosts/MyPostsContainer"
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo"



function Profile(props){
    return(
        <div className={s.profile}>
            <ProfileInfo myId={props.myId} profile={props.profile} status={props.status} onStatusChange={props.onStatusChange}/>
            <MyPostsContainer/>
        </div>
        
    )
}

export default Profile