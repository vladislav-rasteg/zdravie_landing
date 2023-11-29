import {useRef, useState, useEffect} from "react"
import {ReactComponent as Logo} from '../../assets/logo.svg'
import s from "./Footer.module.css"

const Footer = () => {
    return(
        <div className={s.footer}>
            <div className={s.footerContent}>
                <Logo className={s.logo} />
                <div className={s.footerLinks}>
                    <a>О нас</a>
                    <a>Услуги</a>
                    <a>Программы</a>
                    <a>Наши врачи</a>
                    <a>Контакты</a>
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