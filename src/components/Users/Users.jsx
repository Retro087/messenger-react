import React from "react";
import styles from './Users.module.css'
import userPhoto from '../../assets/img/user.png'
import { NavLink } from "react-router-dom";
import axios from "axios";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    let j = 0
    let i = 1
    while (j !== 5) {
        pages.push(i)
        i++
        j++
    }

    return <div>
        <div>
            {
                pages.map(p => {
                    return <span key={p} onClick={() => { props.onPageChanged(p) }} className={props.currentPage === p ? styles.selectedPage : styles.pageNumber}>{p}</span>
                })
            }
        </div>
        {
            props.users.map(u =>
                <div className={styles.userWrapper} key={u.id}>
                    <div className={styles.leftSide}>
                        <NavLink to={'/profile/' + u.id}>
                            <div className={styles.photoWrapper}>
                                <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.photo} alt="" />
                            </div>
                        </NavLink>
                        <div>
                            {u.followed ? <button className={styles.followBtn} onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/profile/` + u.id, {
                                    withCredentials: true,
                                    headers: {
                                        api_key: 'e01c183a-da15-448a-9e2a-1db9b20adc18'
                                    }
                                })
                                    .then(response => {
                                        
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }

                                    })
                            }}>Unfollow</button>
                                : <button className={styles.followBtn} onClick={() => {
                                    axios.put(`https://social-network.samuraijs.com/api/1.0/profile/` + u.id, {}, {
                                        withCredentials: true,
                                        headers: {
                                            api_key: 'e01c183a-da15-448a-9e2a-1db9b20adc18'
                                        }
                                    })
                                        .then(response => {
                                            debugger
                                            if (response.data.resultCode === 0) {
                                                props.follow(u.id)
                                            }

                                        })
                                    props.follow(u.id)
                                }}>Follow</button>}
                        </div>
                    </div>

                    <div className={styles.bodyWrapper}>
                        <div>
                            <div className={styles.name}>{u.name}</div>
                            <div className={styles.status}>{u.status}</div>
                        </div>
                        <div>
                            <div className={styles.country}>{'u.location.country'}</div>
                            <div className={styles.city}>{'u.location.city'}</div>
                        </div>
                    </div>
                </div>
            )
        }</div>
}

export default Users