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
import ARimage from "../../assets/AR.png";
import TSimage from "../../assets/TS.png";
import programsContentChild from "../../assets/programsContentChild.png"
import programsContentAdult from "../../assets/programsContentAdult.png"
import { ReactComponent as FirstMessage } from "../../assets/firstMessage.svg"
import { ReactComponent as SecondMessage } from "../../assets/secondMessage.svg"
import { ReactComponent as SwitchRight } from "../../assets/switchRight.svg"
import { ReactComponent as SwitchLeft } from "../../assets/switchLeft.svg"

const MainPage = () => {

    const [doctorIndex, setDoctorIndex] = useState(1)

    const [doctorsSwitcherClassName, setDoctorsSwitcherClassName] = useState(`${s.doctorImage}`)

    const [programType, setProgramType] = useState(1)

    const [selectedProgram, setSelectedProgram] = useState(1)

    const switchDoctor = () => {
        setDoctorsSwitcherClassName(`${s.doctorImage} ${s.doctorSwitched}`)
        setTimeout(() => {
            setDoctorsSwitcherClassName(`${s.doctorImage}`)
        }, 1000)
    }

    const doctorForward = () => {
        if(doctorIndex === 3){
            setDoctorIndex(1)
        } else {
            setDoctorIndex(doctorIndex+1)
        }
        switchDoctor()
    }

    const doctorBackward = () => {
        if(doctorIndex === 1){
            setDoctorIndex(3)
        } else {
            setDoctorIndex(doctorIndex-1)
        }
        switchDoctor()
    }

    const switchProgramType = () => {
        if(programType === 1){
            setProgramType(2)
        } else {
            setProgramType(1)
        }
    }

    const setSelectedProgramHandler = (index: number) => {
        setSelectedProgram(index)
    }

    return(
        <div className={s.pageWrapper}>
            <Navbar />
            <div className={s.rowFlex}>
                <div className={s.columnFlex}>
                    <div className={s.heroMainBlock}>
                        <h1>Центр <i>превентивной</i><br/>медицины для детей<br/>и взрослых</h1>
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
                    <div className={s.messages}>
                        <div className={s.firstMessage}>
                            Кто в вашей команде?
                            <FirstMessage className={s.firstMessageCorner} />
                        </div>
                        <div className={s.doctorMessageWrapper}>
                            {
                                doctorIndex === 1 ? 
                                    <div className={s.doctorMessage}>
                                        <p className={s.doctorName}>Татьяна Растегаева</p>
                                        <p className={s.doctorMessageText}>
                                        Врач педиатр, гомеопат, натуропат,<br/>
                                        нутрициолог - диетолог, врач интегративной,<br/>
                                        превентивной и антивозрастной медицины,<br/>
                                        висцеральный терапевт, специалист<br/>
                                        по массажу.</p>
                                        <SecondMessage className={s.secondMessageCorner}/>
                                    </div>
                                :
                                doctorIndex === 2 ?
                                    <div className={s.doctorMessage}>
                                        <p className={s.doctorName}>Алексей Растегаев</p>
                                        <p className={s.doctorMessageText}>
                                        Мануальный терапевт, специалист<br/>
                                        по электронной биофункциональной<br/>
                                        органометрии, биорезонансной терапии<br/>
                                        и гомеосиниатрии. Специалист превентивной<br/>
                                        и интегративной медецины.</p>
                                        <SecondMessage className={s.secondMessageCorner}/>
                                    </div>
                                :
                                    <div className={s.doctorMessage}>
                                        <p className={s.doctorName}>Татьяна Сиротина</p>
                                        <p className={s.doctorMessageText}>
                                        Врач-натуропат, педиатр, висцеральный<br/>
                                        терапевт.</p>
                                        <SecondMessage className={s.secondMessageCorner}/>
                                    </div>
                            }
                        </div>
                    </div>
                    <div className={s.ourDoctorsText}>
                        <p>Все процедуры выполняются опытными<br />
                        специалистами и применяются для<br />
                        устранения причины болезни и профилактики.</p>
                        <div onClick={doctorForward} className={s.nextButton}>
                            <ChevronRight  />
                        </div>
                    </div>
                </div>
                <div className={s.doctorImageWrapper}>
                    <img className={doctorsSwitcherClassName} src={doctorIndex === 1 ? TRimage : doctorIndex === 2 ? ARimage : TSimage} />
                    <div className={s.switcher}>
                        <div onClick={doctorBackward} className={s.switcherButton}>
                            <ChevronLeftSmall />
                        </div>
                        <div onClick={doctorForward} className={s.switcherButton}>
                            <ChevronRightSmall />
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.programsSection}>
                <div className={s.programsBlock}>
                    <div className={s.programsHeading}>
                        <h1>Программы для </h1>
                        <h1 className={programType === 1 ? s.programTypeActive : s.programTypeDisabled} onClick={switchProgramType}>детей</h1>
                        <h1> / </h1>
                        <h1 className={programType === 2 ? s.programTypeActive : s.programTypeDisabled} onClick={switchProgramType}>взрослых</h1>
                    </div>
                    <div className={s.programsContentWrapper}>
                        <img className={s.programsContentImage} src={programType === 1 ? programsContentChild : programsContentAdult} />
                        <div className={s.clickToSwitch}>
                            <SwitchRight />
                            <p>Нажмите,<br/>
                            чтобы выбрать<br/>
                            программу</p>
                            <SwitchLeft />
                        </div>
                        <div className={s.programsList}>
                            <div className={s.programsPair}>
                                <div className={selectedProgram === 1 ? `${s.program} ${s.activeProgram}` : s.program} onClick={() => {setSelectedProgramHandler(1)}}>
                                    Здоровейка
                                </div>
                                <div className={selectedProgram === 2 ? `${s.program} ${s.activeProgram}` : s.program} onClick={() => {setSelectedProgramHandler(2)}}>
                                    Говорун
                                </div>
                            </div>
                            <div className={s.programsPair}>
                                <div className={selectedProgram === 3 ? `${s.program} ${s.activeProgram}` : s.program} onClick={() => {setSelectedProgramHandler(3)}}>
                                    Отличник
                                </div>
                                <div className={selectedProgram === 4 ? `${s.program} ${s.activeProgram}` : s.program} onClick={() => {setSelectedProgramHandler(4)}}>
                                    Малышок
                                </div>
                            </div>
                            <div className={selectedProgram === 5 ? `${s.program} ${s.activeProgram}` : s.program} onClick={() => {setSelectedProgramHandler(5)}}>
                                Здоровый позвоночник
                            </div>
                        </div>
                    </div>
                    <div className={s.aboutProgram}>
                    Здоровейка - комплексная программа для детей 
                    с нарушениями осанки, сколиозом, частыми 
                    головокружениями, болями, сниженным зрением.
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default MainPage;