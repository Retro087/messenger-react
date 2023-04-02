import React from "react";
import preloader from '../../../assets/img/preloader.gif'
import s from './Preloader.module.css'

let Preloader = (props) => {   
    return(
        <img src={preloader} className={s.preloader}/>
    )
}

export default Preloader