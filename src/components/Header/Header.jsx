import React from "react";
import s from ".//Header.module.css";
import { NavLink } from "react-router-dom";
import defaultIcon from "../../assets/img/default-profile.png";

function Header(props) {
  return (
    <header className={s.header}>
      <img
        src="https://www.vickyjackson.com/wp-content/uploads/2019/04/facebook_logo.png"
        alt=""
      />

      {props.isAuthorized ? (
        <div className={s.userInfo}>
          <div className={s.login}>{props.login}</div>
          {props.userProfile?.photos.small ? (
            <img className={s.userPhoto} src={props.userProfile.photos.small} />
          ) : (
            <img src={defaultIcon} alt="" className={s.userPhoto} />
          )}

          <button onClick={props.logOut}>Выйти из аккаунта</button>
        </div>
      ) : (
        <NavLink to="/login" className={s.auth}>
          Login
        </NavLink>
      )}
    </header>
  );
}

export default Header;
