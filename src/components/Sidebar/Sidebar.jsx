import React from "react"
import { NavLink } from "react-router-dom"
import s from './Sidebar.module.css'


function Sidebar(){
    return(
        <nav className={s.sidebar}>
            <div className={s.item}><NavLink to="/profile" className = { navData => navData.isActive ? s.active : s.item }>Profile</NavLink></div>
            <div className={s.item}><NavLink to="/users" className = { navData => navData.isActive ? s.active : s.item }>Users</NavLink></div>
            <div className={s.item}><NavLink to="/dialogs" className = { navData => navData.isActive ? s.active : s.item }>Messages</NavLink></div>
            <div className={s.item}><NavLink to="/news" className = { navData => navData.isActive ? s.active : s.item }>News</NavLink></div>
            <div className={s.item}><NavLink to="/music" className = { navData => navData.isActive ? s.active : s.item }>Music</NavLink></div>
            <div className={s.item}><NavLink to="/settings" className = { navData => navData.isActive ? s.active : s.item }>Settings</NavLink></div>
        </nav>
    )
}

export default Sidebar