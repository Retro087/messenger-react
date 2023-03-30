import React from "react";
import { NavLink } from "react-router-dom";
import s from './DialogItem.module.css'

function DialogItem(props){
    let path = "/Dialogs/" + props.id
    return(
        <div className={s.dialog}>
            <img className={s.avatar} src="https://abrakadabra.fun/uploads/posts/2021-12/thumbs/1639946157_16-abrakadabra-fun-p-prikolnie-avi-v-standoff-16.jpg" alt="" />
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem