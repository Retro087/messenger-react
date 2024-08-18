import React from "react";
import s from './UsersSettings.module.css'

let UsersSettings = (props) => {
    return (
        <div className={s.sett}>
            <form action="" onSubmit={(e) => e.preventDefault = false}>
                <div className={s.searchWrapper}>
                    <p>Поиск по имени</p>
                    <input autoFocus={true} value={props.nameSearch} onChange={(e) => { props.getUsersByName(e.target.value) }} type="text" placeholder='Введите имя' />
                </div>
                <div className={s.btnWrapper}>
                    <p>Поиск по друзьям</p>
                    {props.onlyFriends ? <button className={s.btn} onClick={() => { props.getOnlyFriends(false) }}>Показать других пользователей</button> : <button className={s.btn} onClick={() => { props.getOnlyFriends(true) }}>Показать моих друзей</button>}
                </div>
            </form>

        </div>
    )
}


export default UsersSettings