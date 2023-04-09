import React from "react";
import s from './UsersSettings.module.css'

let UsersSettings = (props) => {
    debugger
    return (
        <div className={s.sett}>
            <div className={s.searchWrapper}>
                <p>Поиск по имени</p>
                <input autoFocus={true} value={props.nameSearch} onChange={(e) => {props.getUsersByName(e.target.value)}} type="text" placeholder='Введите имя' />
            </div>
            <div className={s.btnWrapper}>
                <p>Поиск по друзьям</p>
                {props.onlyFriends ? <button className={s.btn} onClick={() => { props.getOnlyFriends(false) }}>Показать других пользователей</button> : <button className={s.btn} onClick={() => { props.getOnlyFriends(true) }}>Показать моих друзей</button>}
            </div>
        </div>
    )
}

export default UsersSettings