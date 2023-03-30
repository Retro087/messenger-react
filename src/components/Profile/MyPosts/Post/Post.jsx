import React from "react"
import s from './Post.module.css'

function Post(props){
    return (
        <div className={s.item}>
            <img src="https://abrakadabra.fun/uploads/posts/2021-12/thumbs/1639946157_16-abrakadabra-fun-p-prikolnie-avi-v-standoff-16.jpg" alt="" />
            {props.message}
            <div>
                <span>like</span> {props.likes}
            </div>

        </div>
    )
}

export default Post