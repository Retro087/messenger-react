import React from "react"
import s from './/Header.module.css'
import { NavLink } from "react-router-dom"

function Header(props){
    return(
        <header className={s.header}>
            <img src="https://www.vickyjackson.com/wp-content/uploads/2019/04/facebook_logo.png" alt="" />
            {props.isAuthorized ? 
            <div>
                <div className={s.login}>{props.login}</div>
            </div> 
                : <NavLink to='/login' className={s.auth}>Login</NavLink>}
        </header>
    )
}

export default Header