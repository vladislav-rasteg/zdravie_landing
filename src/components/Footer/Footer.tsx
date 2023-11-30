import {useRef, useState, useEffect} from "react"
import {ReactComponent as Logo} from '../../assets/logo.svg'
import s from "./Footer.module.css"

const Footer = () => {
    return(
        <div className={s.footer}>
            <div className={s.footerContent}>
                <Logo className={s.logo} />
                <div className={s.footerLinks}>
                    <a href="#about">О нас</a>
                    <a href="#services">Услуги</a>
                    <a href="#doctors">Наши врачи</a>
                    <a href="#programs">Программы</a>
                    <a href="#reviews">Отзывы</a>
                    <a href="#contacts">Карта</a>
                </div>
                <div className={s.footerButtons}>
                    <a href="tel:83422581285">+7 (342) 258-12-85</a>
                    <a href="https://yandex.ru/maps/-/CDafZKZ-">Пермь, ул. Крупской 67</a>
                </div>
            </div>
        </div>
        
    )
    
}

export default Footer;