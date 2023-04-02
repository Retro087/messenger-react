import React from "react";
import styles from './Users.module.css'
import userPhoto from '../../assets/img/user.png'

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
                        <div className={styles.photoWrapper}>
                            <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.photo} alt="" />
                        </div>
                        <div>
                            {u.followed ? <button className={styles.followBtn} onClick={() => { props.unfollow(u.id) }}>Unfollow</button> : <button className={styles.followBtn} onClick={() => { props.follow(u.id) }}>Follow</button>}
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