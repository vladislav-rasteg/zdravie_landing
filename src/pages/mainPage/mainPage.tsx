import {useRef, useState, useEffect} from "react"
import firstHeroImage from '../../assets/firstHeroImage.png'
import secondHeroImage from '../../assets/secondHeroImage.png'
import thirdHeroImage from '../../assets/thirdHeroImage.png'
import Navbar from "../../components/Navbar/navbar"
import s from "./mainPage.module.css"
import { ReactComponent as ChevronRight } from "../../assets/chevron_right.svg"
import { ReactComponent as ChevronRightSmall } from "../../assets/chevron_right_small.svg"
import { ReactComponent as ChevronLeftSmall } from "../../assets/chevron_left_small.svg"
import TRimage from "../../assets/TR.png";

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

            <div className={s.servicesBlock}>
                <h1>Наши услуги</h1>
                <div className={s.servicesGrid}>
                    <div className={s.service1}>
                        <h3>Массаж детский</h3>
                        <div className={s.buttonRow}>
                            <a className={s.button}>Подробнее</a>
                        </div>
                    </div>
                    <div className={s.service2}>
                        
                    </div>
                    <div className={s.service3}>
                        <h3>Массаж женский</h3>
                        <div className={s.buttonRow}>
                            <a className={s.button}>Подробнее</a>
                        </div>
                    </div>
                    <div className={s.service4}>
                        <h3>Массаж мужской</h3>
                        <div className={s.buttonRow}>
                            <a className={s.button}>Подробнее</a>
                        </div>
                    </div>
                    <div className={s.service5}>
                        <p>Более 25 лет мы разрабатываем
                        <br/>и применяем программы с самыми
                        эффективными методами
                        поддержания и восстановления
                        здоровья для детей и взрослых</p>
                    </div>
                    <div className={s.service6}>
                        <h3>Прием педиатра</h3>
                        <div className={s.buttonRow}>
                            <a className={s.button}>Подробнее</a>
                        </div>
                    </div>
                    <div className={s.service7}>
                        <h3>Наши курсы</h3>
                        <a className={s.button}>Смотреть</a>
                    </div>
                    <div className={s.service8}>
                        <h3>Биорезонансная <br/>терапия</h3>
                        <div className={s.buttonRow}>
                            <a className={s.button}>Подробнее</a>
                        </div>
                    </div>
                    <div className={s.service9}>
                        <h3>Кабинет здорового<br/>питания для детей<br/>и взрослых</h3>
                        <div className={s.buttonRow}>
                            <a className={s.button}>Подробнее</a>
                        </div>
                    </div>
                    <div className={s.service10}>
                        
                    </div>
                    <div className={s.service11}>
                        <h3>Остеопатия</h3>
                        <div className={s.buttonRow}>
                            <a className={s.button}>Подробнее</a>
                        </div>
                    </div>
                    <div className={s.service12}>
                        <h3>Мануальная <br/>терапия</h3>
                        <div className={s.buttonRow}>
                            <a className={s.button}>Подробнее</a>
                        </div>
                    </div>

                </div>
            </div>
            <div className={s.ourDoctors}>
                <div className={s.aboutDoctor}>
                    <h1>Наши врачи</h1>
                    <p>сообщения</p>
                    <div className={s.ourDoctorsText}>
                        <p>Все процедуры выполняются опытными<br />
                        специалистами и применяются для<br />
                        устранения причины болезни или профилактики.</p>
                        <div className={s.nextButton}>
                            <ChevronRight  />
                        </div>
                    </div>
                </div>
                <div className={s.doctorImageWrapper}>
                    <img className={s.doctorImage} src={TRimage} />
                    <div className={s.switcher}>
                        <div className={s.switcherButton}>
                            <ChevronLeftSmall />
                        </div>
                        <div className={s.switcherButton}>
                            <ChevronRightSmall />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default mainPage;