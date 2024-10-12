import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/img/default-profile.png";
import { NavLink } from "react-router-dom";
import UsersSettings from "./UsersSettings";
import Pagination from "../common/Pagination/Pagination";

let Users = (props) => {
  return (
    <div>
      <Pagination
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        onPageChanged={props.onPageChanged}
      />
      <div className={styles.usersWrapper}>
        <div className={styles.users}>
          {props.users.map((u) => (
            <div className={styles.userWrapper} key={u.id}>
              <div className={styles.leftSide}>
                <NavLink to={"/profile/" + u.id}>
                  <div className={styles.photoWrapper}>
                    <img
                      src={u.photos.small !== null ? u.photos.small : userPhoto}
                      className={styles.photo}
                      alt=""
                    />
                  </div>
                </NavLink>
                <div>
                  {u.followed ? (
                    <button
                      disabled={props.followingInProgress.some(
                        (id) => id === u.id
                      )}
                      className={styles.followBtn}
                      onClick={() => {
                        props.unfollow(u.id);
                      }}
                    >
                      Unfollow
                    </button>
                  ) : (
                    <button
                      disabled={props.followingInProgress.some(
                        (id) => id === u.id
                      )}
                      className={styles.followBtn}
                      onClick={() => {
                        props.follow(u.id);
                      }}
                    >
                      Follow
                    </button>
                  )}
                </div>
              </div>

              <div className={styles.bodyWrapper}>
                <div>
                  <div className={styles.name}>{u.name}</div>
                  <div className={styles.status}>{u.status}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <UsersSettings {...props} />
      </div>
    </div>
  );
};

export default Users;
