import React from "react";
import s from './ProfileInfo.module.css'

function ProfileInfo(props){
    return(
        <div>
            <div className={s.img_block}>
                <img className={s.img} src="https://bugaga.ru/uploads/posts/2011-10/1320062116_nature-8.jpg" alt="" />
            </div>
            <div className={s.description_block}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo