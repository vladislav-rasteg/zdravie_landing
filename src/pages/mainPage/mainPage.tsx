import {useRef, useState, useEffect} from "react"
import firstHeroImage from '../../assets/firstHeroImage.png'
import secondHeroImage from '../../assets/secondHeroImage.png'
import thirdHeroImage from '../../assets/thirdHeroImage.png'
import Navbar from "../../components/Navbar/navbar"
import s from "./mainPage.module.css"

const mainPage = () => {
    return(
        <div className={s.pageWrapper}>
            <Navbar />
            <div className={s.rowFlex}>
                <div className={s.columnFlex}>
                    <div className={s.heroMainBlock}>
                        <h1>Клиника <i>превентивной</i><br/>медицины для детей<br/>и взрослых</h1>
                        <a href="https://yandex.ru/maps/-/CDafZKZ-" target="_blanc">Пермь, ул. Крупской, 67</a>
                    </div>
                    <div className={s.rowFlex}>
                        <img className={s.firstHeroImage} src={firstHeroImage} />
                        <img className={s.secondHeroImage} src={secondHeroImage} />
                    </div>
                    <div className={s.heroRecordBlock}>
                        <h2>Записаться<br/>к специалисту</h2>
                        <a className={s.whiteButton}>Онлайн запись</a>
                    </div>
                </div>
                <div>
                <img className={s.thirdHeroImage} src={thirdHeroImage} />
                </div>
            </div>

            <div className={s.aboutBlock}>
                <p className={s.aboutText}>Мы специализируемся на превентивной медицине
                                            <br/>и массаже. Наши врачи применяют целостный подход
                                            <br/>к лечению, устраняя  не только симптомы,
                                            <br/>но и основные причины болезни</p>
                <a className={s.aboutButton}>Записаться на прием</a>
            </div>
        </div>
    )
}

export default mainPage;