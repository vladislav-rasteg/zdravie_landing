import {useRef, useState, useEffect} from "react"
import {ReactComponent as Logo} from '../../assets/logo.svg'
import s from "./navbar.module.css"

const navbar = () => {
    return(
        <div className={s.navbarWrapper}>
            <div className={s.navbar}>
                <Logo />
                <div className={s.navbarLinks}>
                    <a>О нас</a>
                    <a>Услуги</a>
                    <a>Программы</a>
                    <a>Наши врачи</a>
                    <a>Блог</a>
                    <a>Контакты</a>
                </div>
                <div className={s.navButtons}>
                    <a>+7 (342) 258-12-85</a>
                    <a className={s.navbarButton}>Записаться на прием</a>
                </div>
            </div>
        </div>
        
    )
    
}

export default navbar;