import React from "react"
import s from './Post.module.css'

function Post(props) {
    function addLike() {
        props.addLike(props.id)
    }

    function disLike() {
        props.disLike(props.id)
    }

    return (
        <div className={s.item}>
            <div className={s.itemBody}>
                <div className={s.imgWrapper}>
                    <img src="https://abrakadabra.fun/uploads/posts/2021-12/thumbs/1639946157_16-abrakadabra-fun-p-prikolnie-avi-v-standoff-16.jpg" alt="" />
                </div>

                <div className={s.msgBody}>
                    <div>
                        {props.name}
                    </div>
                    <div className={s.msg}>
                        {props.message}
                    </div>
                </div>
            </div>
            <div>
                <span>likes: {props.likes}</span>
                <div>
                    {props.liked ? <button className={s.dislikeBtn} onClick={disLike}>Dislike</button> : <button className={s.likeBtn} onClick={addLike}>Like</button>}
                </div>
            </div>



        </div>
    )
}

export default Post