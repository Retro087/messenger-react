import React, { useState } from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import Status from "./ProfileStatus";
import defaultIcon from "../../../assets/img/default-profile.png";
import { updatePhoto } from "../../../redux/profile-reducer.ts";

function ProfileInfo(props) {
  const [edit, setEdit] = useState(false);
  const [back, setBack] = useState("");

  if (!props.profile) {
    return <Preloader />;
  }
  debugger;
  return (
    <div className={s.mainBlock}>
      <div className={s.img_block}>
        <img
          className={s.img}
          src={
            back
              ? back
              : "https://bugaga.ru/uploads/posts/2011-10/1320062116_nature-8.jpg"
          }
          alt=""
        />
      </div>
      <div className={s.description_block}>
        {props.profile.photos.small ? (
          <img
            src={props.profile.photos.small}
            alt=""
            className={s.userPhoto}
          />
        ) : (
          <img src={defaultIcon} alt="" className={s.userPhoto} />
        )}
        {edit ? (
          <input
            type="file"
            onChange={(e) => props.updatePhoto(e.target.files[0])}
          />
        ) : null}
        <div>
          <p className={s.userName}>{props.profile.fullName}</p>
          <Status
            profile={props.profile}
            myId={props.myId}
            status={props.status}
            onStatusChange={props.onStatusChange}
          />
        </div>
        <p>{props.profile.aboutMe}</p>
        <p>{props.profile.contacts.vk}</p>
        <p>{props.profile.aboutMe}</p>
        <p>{props.profile.lookingForAJob}</p>
      </div>
      {props.myId == props.profile.userId ? (
        <button
          onClick={() => {
            setEdit(!edit);
          }}
          className={s.edit}
        >
          Редактировать профиль
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default ProfileInfo;
