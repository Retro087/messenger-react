import React from "react"
import { NavLink } from "react-router-dom"
import s from './Sidebar.module.css'


function Sidebar(){
    return(
        <nav className={s.sidebar}>
            <div className={s.item}><NavLink to="/Profile" className = { navData => navData.isActive ? s.active : s.item }>Profile</NavLink></div>
            <div className={s.item}><NavLink to="/Users" className = { navData => navData.isActive ? s.active : s.item }>Users</NavLink></div>
            <div className={s.item}><NavLink to="/Dialogs" className = { navData => navData.isActive ? s.active : s.item }>Messages</NavLink></div>
            <div className={s.item}><NavLink to="/News" className = { navData => navData.isActive ? s.active : s.item }>News</NavLink></div>
            <div className={s.item}><NavLink to="/Music" className = { navData => navData.isActive ? s.active : s.item }>Music</NavLink></div>
            <div className={s.item}><NavLink to="/Settings" className = { navData => navData.isActive ? s.active : s.item }>Settings</NavLink></div>
        </nav>
    )
}

export default Sidebar