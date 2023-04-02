import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";

function ProfileInfo(props){
    if(!props.profile){
        return <Preloader/>
    }
    return(
        <div>
            <div className={s.img_block}>
                <img className={s.img} src="https://bugaga.ru/uploads/posts/2011-10/1320062116_nature-8.jpg" alt="" />
            </div>
            <div className={s.description_block}>
                <img src={props.profile.photos.small} alt="" />
                <p>{props.profile.fullName}</p>
                <p>{props.profile.aboutMe}</p>
                
            </div>
        </div>
    )
}

export default ProfileInfo