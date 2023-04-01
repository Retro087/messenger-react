import React from "react";
import styles from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/img/user.png'

class Users extends React.Component {

    componentDidMount (){
        if (this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    this.props.setUsers(response.data.items)
                })
        }
    }

    render() {
        return (
            <div>{
                this.props.users.map(u =>
                    <div className={styles.userWrapper} key={u.id}>
                        <div className={styles.leftSide}>
                            <div className={styles.photoWrapper}>
                                <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.photo} alt="" />
                            </div>
                            <div>
                                {u.followed ? <button className={styles.followBtn} onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button> : <button className={styles.followBtn} onClick={() => { this.props.follow(u.id) }}>Follow</button>}
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
        )
    }


}

export default Users