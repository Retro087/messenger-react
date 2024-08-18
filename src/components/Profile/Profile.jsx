import React, { useEffect } from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
  useEffect(() => {
    let profileId = props.router.params.profileId;
    if (!profileId) {
      profileId = props.id;
    }

    props.getProfile(profileId);
    props.getStatus(profileId);
  }, []);

  return (
    <div className={s.profile}>
      <ProfileInfo
        myId={props.id}
        profile={props.profile}
        status={props.status}
        onStatusChange={props.updateStatus}
      />
      <MyPostsContainer />
    </div>
  );
}

export default Profile;
