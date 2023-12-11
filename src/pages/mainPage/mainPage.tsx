import {useRef, useState, useEffect} from "react"
import {motion, useScroll, useTransform, useSpring} from "framer-motion"
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
import review1 from "../../assets/review1.png";
import review2 from "../../assets/review2.png";
import review3 from "../../assets/review3.png";
import review4 from "../../assets/review4.png";
import Footer from "../../components/Footer/Footer"
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { BurgerMenu } from "../../components/BurgerMenu"

const MainPage = () => {

    const { height, width } = useWindowDimensions();

    const [showBurgerMenu, setShowBurgerMenu] = useState(false)

    const [doctorIndex, setDoctorIndex] = useState(1)

    const [doctorsSwitcherClassName, setDoctorsSwitcherClassName] = useState(`${s.doctorImage}`)

    const [programType, setProgramType] = useState(1)
    
    const [programTypeSwitched2, setProgramTypeSwitched2] = useState(false)

    const [selectedProgram, setSelectedProgram] = useState(1)

    const [isMobile, setIsMobile] = useState(false)

    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1 1"]
    })

    var programTypeSwitched = false;

    scrollYProgress.on("change", () => {
        if(!programTypeSwitched && !programTypeSwitched2 && scrollYProgress.getPrevious() > 0.75){
            programTypeSwitched=true
            setProgramType(2)
            setProgramTypeSwitched2(true)
            setSelectedProgram(6)
        }
    })
    

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
            setSelectedProgram(6)
        } else {
            setProgramType(1)
            setSelectedProgram(1)   
        }
    }

    useEffect(() => {
        if(width && width < 700){
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }, [width])

    const setSelectedProgramHandler = (index: number) => {
        setSelectedProgram(index)
    }

    return(
        <div className={s.pageWrapper}>
            <Navbar showBurgerMenu={showBurgerMenu} setShowBurgerMenu={setShowBurgerMenu} />

            <BurgerMenu setIsOpen={setShowBurgerMenu} isOpen={showBurgerMenu}> 
                <div className={s.burgerLinks}>
                    <a href="#about" onClick={() => setShowBurgerMenu(false)} >О нас</a>
                    <a href="#services" onClick={() => setShowBurgerMenu(false)} >Услуги</a>
                    <a href="#doctors" onClick={() => setShowBurgerMenu(false)} >Наши врачи</a>
                    <a href="#programs" onClick={() => setShowBurgerMenu(false)} >Программы</a>
                    <a href="#reviews" onClick={() => setShowBurgerMenu(false)} >Отзывы</a>
                </div>
            </BurgerMenu>

            <div className={`${s.rowFlex} ${s.desctopOnly}`}>
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
                        <a href="#" className={s.whiteButton} data-url="https://w632142.yclients.com/">Онлайн запись</a>
                    </div>
                </div>
                <div>
                <img className={s.thirdHeroImage} src={thirdHeroImage} />
                </div>
            </div>

            <div className={`${s.columnFlex} ${s.mobileOnly}`}>
                <div className={s.heroMainBlock}>
                    <h1>Центр <i>превентивной</i><br/>медицины для детей<br/>и взрослых</h1>
                    <a href="https://yandex.ru/maps/-/CDafZKZ-" target="_blanc">Пермь, ул. Крупской, 67</a>
                </div>
                <div className={s.rowFlex}>    
                    <div className={`${s.columnFlex} ${s.columnFlexMobile}`}>
                        <img className={s.secondHeroImage} src={secondHeroImage} />
                        <img className={s.firstHeroImage} src={firstHeroImage} />
                    </div>
                    <div className={s.thirdHeroImageWrapper}>
                        <img className={s.thirdHeroImage} src={thirdHeroImage} />
                    </div>
                </div>
                <div className={s.heroRecordBlock}>
                    <h2>Записаться<br/>к специалисту</h2>
                    <a href="https://n632142.yclients.com/" className={s.whiteButton} data-url="https://n632142.yclients.com/">Онлайн запись</a>
                </div>
            </div>

            <div className={s.aboutBlock} id="about">
                <p className={s.aboutText}>Мы специализируемся на превентивной медицине
                                            <br/>и массаже. Наши врачи применяют целостный подход
                                            <br/>к лечению, устраняя  не только симптомы,
                                            <br/>но и основные причины болезни</p>
                <a className={s.aboutButton}>Записаться на прием</a>
            </div>

            <div className={s.servicesBlock} id="services">
                <h1>Наши услуги</h1>
                { !isMobile ? 
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
                :
                    <div className={s.servicesGrid}>
                        <div className={s.service}>
                            <div className={s.service1}>
                            </div>
                            <h3>Массаж детский</h3>
                            <div className={s.buttonRow}>
                                <a className={s.button}>Подробнее</a>
                            </div>
                        </div>
                        <div className={s.service}>
                            <div className={s.service3}></div>
                            <h3>Массаж женский</h3>
                            <div className={s.buttonRow}>
                                <a className={s.button}>Подробнее</a>
                            </div>
                        </div>
                        <div className={s.service}>
                            <div className={s.service4}></div>
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
                        <div className={s.service}>
                            <div className={s.service6}></div>
                            <h3>Прием<br />педиатра</h3>
                            <div className={s.buttonRow}>
                                <a className={s.button}>Подробнее</a>
                            </div>
                        </div>
                        <div className={s.service7}>
                            <h3>Наши курсы</h3>
                            <a className={s.button}>Смотреть</a>
                        </div>
                        <div className={s.service}>
                            <div className={s.service8}></div>
                            <h3>Биорезо&shy;нансная <br/>терапия</h3>
                            <div className={s.buttonRow}>
                                <a className={s.button}>Подробнее</a>
                            </div>
                        </div>
                        <div className={s.service}>
                            <div className={s.service9}></div>
                            <h3>Кабинет здорового<br/>питания для детей<br/>и взрослых</h3>
                            <div className={s.buttonRow}>
                                <a className={s.button}>Подробнее</a>
                            </div>
                        </div>
                        
                        <div className={s.service}>
                            <div className={s.service11}></div>
                            <h3>Остеопатия</h3>
                            <div className={s.buttonRow}>
                                <a className={s.button}>Подробнее</a>
                            </div>
                        </div>
                        
                        <div className={s.service}>
                            <div className={s.service12}></div>
                            <h3>Мануальная <br/>терапия</h3>
                            <div className={s.buttonRow}>
                                <a className={s.button}>Подробнее</a>
                            </div>
                        </div>
                        

                </div>
                }
                </div>
            <div className={s.ourDoctors} id="doctors">
                <div className={s.aboutDoctor}>
                    <div className={s.aboutDoctorHeading}>
                        <h1>Наши врачи</h1>
                        <div className={s.aboutDoctorsSwitcher}>
                            <div onClick={doctorBackward} className={s.switcherButton}>
                                <ChevronLeftSmall />
                            </div>
                            <div onClick={doctorForward} className={s.switcherButton}>
                            <ChevronRightSmall />
                            </div>
                        </div>
                    </div>
                        
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
                                        Мануальный терапевт, остеопат.<br/>
                                        Специалист по лечению вертебральной патологии<br/>
                                        у взрослых и детей. Лечение головных и суставных<br/>
                                        болей, авторские методики. Врач превентивной,<br/>
                                        интегративной и антивозрастной медицины.<br/>
                                        Студент PreventAge Basic.</p>
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
                        пециалистами и применяются для<br />
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
            <div className={s.programsSection} ref={ref} id="programs">
                <div className={s.programsBlock}>
                    {
                        !isMobile ?
                            <div className={s.programsHeading}>
                                <h1>Программы для </h1>
                                <h1 className={programType === 1 ? s.programTypeActive : s.programTypeDisabled} onClick={switchProgramType}>детей</h1>
                                <h1> / </h1>
                                <h1 className={programType === 2 ? s.programTypeActive : s.programTypeDisabled} onClick={switchProgramType}>взрослых</h1>
                            </div>
                        :
                            <div className={s.programsHeading}>
                                <h1> Программы для</h1>
                                <div className={s.programsHeadingButtons}>
                                    <h1 className={programType === 1 ? s.programTypeActive : s.programTypeDisabled} onClick={switchProgramType}>детей</h1>
                                    <h1> / </h1>
                                    <h1 className={programType === 2 ? s.programTypeActive : s.programTypeDisabled} onClick={switchProgramType}>взрослых</h1>
                                </div>
                            </div>

                    }
                    <div className={s.programsContentWrapper}>
                        <img className={s.programsContentImage} src={programType === 1 ? programsContentChild : programsContentAdult} />
                        <div className={s.clickToSwitch}>
                            <SwitchRight />
                            <p>Нажмите,<br/>
                            чтобы выбрать<br/>
                            программу</p>
                            <SwitchLeft />
                        </div>
                        {programType === 1 ? 
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
                            :
                            <div className={s.programsList}>
                            <div className={s.programsPair}>
                                <div className={selectedProgram === 6 ? `${s.program2} ${s.activeProgram2}` : s.program2} onClick={() => {setSelectedProgramHandler(6)}}>
                                    Преодоление своего страха
                                </div>
                                <div className={selectedProgram === 7 ? `${s.program2} ${s.activeProgram2}` : s.program2} onClick={() => {setSelectedProgramHandler(7)}}>
                                    Победа над депрессиями
                                </div>
                            </div>
                            <div className={s.programsPair}>
                                <div className={selectedProgram === 8 ? `${s.program2} ${s.activeProgram2}` : s.program2} onClick={() => {setSelectedProgramHandler(8)}}>
                                    Сексуальная регуляция
                                </div>
                                <div className={selectedProgram === 9 ? `${s.program2} ${s.activeProgram2}` : s.program2} onClick={() => {setSelectedProgramHandler(9)}}>
                                    Программа обучения
                                </div>
                            </div>
                            <div className={s.programsPair}>
                                <div className={selectedProgram === 10 ? `${s.program2} ${s.activeProgram2}` : s.program2} onClick={() => {setSelectedProgramHandler(10)}}>
                                    Выход из стресса
                                </div>
                                <div className={selectedProgram === 11 ? `${s.program2} ${s.activeProgram2}` : s.program2} onClick={() => {setSelectedProgramHandler(11)}}>
                                    Денежный поток
                                </div>
                            </div>
                        </div>

                        }
                        
                    </div>
                    <div className={s.aboutProgram} style={programType === 1 ? {background: '#CBEB96'} : {background: '#B9D8F7'}}>
                        {
                            selectedProgram === 1 ?
                                <p>Здоровейка - программа для часто и длительно болеющих детей. Мы помогаем родителям понять причину болезней и показываем пути их решения.</p>
                            :
                            selectedProgram === 2 ?
                                <p>Говорун - программа для детей, имеющих задержку речевого развития. Это авторская, эффективная методика Татьяны Сиротиной.</p>
                            :
                            selectedProgram === 3 ?
                                <p>Отличник - комплексная программа для детей школьного возраста. Прогрмма помогает снять тревогу ребенка перед школой, справиться с рассеянностью, а также способствует улучшению памяти.</p>
                            :
                            selectedProgram === 4 ?
                                <p>Малышок - уникальная программа. Специалисты Здравия более 25 лет собирали опыт в лечении и поддержании здоровья новорожденных детей, здоровых детей, и деток, имеющих те или иные отклонения.</p>
                            :
                            selectedProgram === 5 ?
                                <p>Здоровый позвоночник - комплексная программа для детей 
                                с нарушениями осанки, сколиозом, частыми 
                                головокружениями, болями, сниженным зрением.</p>
                            :
                            selectedProgram === 6 ?
                                <p>Мы поможем вам преодолеть сови страхи! Вы справитесь с боязнью публичных выступлений, перелетов, отношений, темноты или насекомых. Границы вашей реальности раздвинутся!</p>
                            :
                            selectedProgram === 7 ?
                                <p>Начните радоваться жизни! Позвольте себе это! Программа устраняет любые виды депрессий, беспокойства, неврозы, чувство вины, панические атаки, ПМС, климакс и многое другое.</p>
                            :
                            selectedProgram === 8 ?
                                <p>Эффективная программа проблем сексуальной сферы мужчин и женщин. Решим проблему ослабленной потенции или низкого либидо. Сделайте вашу жизнь ярче!</p>
                            :
                            selectedProgram === 9 ?
                                <p>Обучайтесь без труда! Поможем снять стресс, улучшить обучаемость, память и повысить концентрацию. Вы подниметесь на новые высоту в учебе и работе!</p>
                            :
                            selectedProgram === 10 ?
                                <p>Вернитесь к здоровой и счастливой жизни! Программа высвободит вас из круга стресс - болезнь - стресс. </p>
                            :
                                <p>Программа направлена на стабилизацию финансовой части жизни. Снятие психологических ограничений и страхов. </p>

                        }
                        <div className={s.aboutProgramButtons}>
                            <a className={s.button}>Записаться онлайн</a>
                            <a className={s.button} href="tel:83422581285">+7 (342) 258-12-85</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.aboutBlock}>
                <p className={s.aboutText}>"Болезнь - это дарама в 2 актах, из которых первый разыгрывается в угрюмой тиши тканей, при погашенных огнях, без намека на болевые ощущения.<br />
                Когда появляется боль или другие неприятные ощущения, это почти всегда второй акт..."
                </p>
                {   !isMobile ?
                    <p className={s.rightText}>Французский врач Рене Лариш</p>
                    :
                    <p className={s.rightText}>Французский врач<br />Рене Лариш</p>
                }
                <a className={s.aboutButton}>Записаться на консультацию</a>
            </div>
            <div className={s.reviews} id="reviews">
                <div className={s.reviews_left}>
                    <h1>Отзывы</h1>
                    <div className={s.subblock}>
                        <p>
                        Вы всегда можете оставить<br/>
                        честный отзыв о нашей работе
                        </p>
                        <a href="https://yandex.ru/maps/-/CDecMUm-" target="_blank" className={s.reviewButton}>Оставить отзыв</a>
                    </div>
                </div>
                <div className={s.reviews_right}>
                    <div className={s.review}>
                        <img src={review1} />
                        <div className={s.reviewText}>
                            <p className={s.reviewTextName}>​Ксения Пугач</p>
                            <p className={s.reviewTextText}>
                            Лучшие врачи, думающие, не назначают с ходу
                            антибиотики, разбираются в проблеме!
                            Достойная терапия, натуропатия! Рекомендую
                            для тех родителей, кто думает о своих детках и об
                            их здоровье, а так же о своем!
                            </p>
                        </div>
                    </div>
                    <div className={s.review}>
                        <img src={review2} />
                        <div className={s.reviewText}>
                            <p className={s.reviewTextName}>Алёна Кустова</p>
                            <p className={s.reviewTextText}>
                            Ходим в Здравие с 2 детьми уже более 5 лет.
                            Лечат и взрослых, и детей. Работают не на
                            отвяжись, а тщательно разбираясь в проблеме,
                            ее лечении и сохранении здоровья не в моменте,
                            а на всю жизнь.
                            </p>
                        </div>
                    </div>
                    <div className={s.review}>
                        <img src={review3} />
                        <div className={s.reviewText}>
                            <p className={s.reviewTextName}>Елена К.</p>
                            <p className={s.reviewTextText}>
                                Ходим почти всей семьёй, отличные специалисты
                                своего дела, отношение внимательное. Особенно
                                рекомендую для семей с детьми, решаются
                                многие проблемы со здоровьем у деток.
                            </p>
                        </div>
                    </div>
                    <div className={s.review}>
                        <img src={review4} />
                        <div className={s.reviewText}>
                            <p className={s.reviewTextName}>Александра Дубчинская</p>
                            <p className={s.reviewTextText}>
                                Очень хороший медицинский центр, для тех, кто
                                устал от лекарств, замучался сидеть на
                                больничном с ребенком, грамотная работа
                                докторов с детьми и взрослыми!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.servicesBlock} id="contacts">
                <h1>Где мы находимся</h1>
                <iframe className={s.map} src="https://yandex.ru/map-widget/v1/?um=constructor%3A0bca8db149da5c9d1453403d44b0b4faedf3e97da7f12712f0f4c8342ca41121&amp;source=constructor" width="100%" height="500"></iframe>
            </div>
            <Footer />
        </div>
        
    )
}

export default MainPage;
