import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import Status from "./ProfileStatus";
import defaultIcon from "../../../assets/img/default-profile.png"

function ProfileInfo(props) {

    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={s.mainBlock}>
            <div className={s.img_block}>
                <img className={s.img} src="https://bugaga.ru/uploads/posts/2011-10/1320062116_nature-8.jpg" alt="" />
            </div>
            <div className={s.description_block}>
                {props.profile.photos.small ? <img src={props.profile.photos.small} alt="" className={s.userPhoto} /> : <img src={defaultIcon} alt="" className={s.userPhoto} />}
                
                <div>
                    <p className={s.userName}>{props.profile.fullName}</p>
                    <Status profile={props.profile} myId={props.myId} status={props.status} onStatusChange={props.onStatusChange}/>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo