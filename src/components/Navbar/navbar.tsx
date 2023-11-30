import {useRef, useState, useEffect} from "react"
import {ReactComponent as Logo} from '../../assets/logo.svg'
import s from "./navbar.module.css"

interface NavbarProps{
    showBurgerMenu: boolean;
    setShowBurgerMenu: Function;
}

const Navbar = ({showBurgerMenu, setShowBurgerMenu}: NavbarProps) => {

    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const useWindowDimensions = () => {

    const hasWindow = typeof window !== 'undefined';
    
    function getWindowDimensions() {
        const width = hasWindow ? window.innerWidth : null;
        const height = hasWindow ? window.innerHeight : null;
        return {
        width,
        height,
        };
    }
    
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    
    useEffect(() => {
        if (hasWindow) {
        const handleResize = () => {
            setWindowDimensions(getWindowDimensions());
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
        }
    }, [hasWindow]);
        return windowDimensions;
    }

    const controlNavbar = () => {
        if (typeof window !== "undefined") {
            if (window.scrollY > lastScrollY) {
            // if scroll down hide the navbar
            setShowNavbar(false);
            } else {
            // if scroll up show the navbar
            setShowNavbar(true);
            }

            // remember current page location to use in the next move
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
          window.addEventListener("scroll", controlNavbar);
    
          // cleanup function
          return () => {
            window.removeEventListener("scroll", controlNavbar);
          };
        }
      }, [lastScrollY]);

    return(
        <div className={`${s.navbarWrapper} ${!showNavbar && s.navbarHide}`}>
            <div className={s.navbar}>
                <Logo className={s.logo}/>
                <div className={s.navbarLinks}>
                    <a href="#about">О нас</a>
                    <a href="#services">Услуги</a>
                    <a href="#doctors">Наши врачи</a>
                    <a href="#programs">Программы</a>
                    <a href="#reviews">Отзывы</a>
                    <a href="#contacts">Карта</a>
                </div>
                <div className={s.navButtons}>
                    <a>+7 (342) 258-12-85</a>
                    <a className={s.navbarButton}>Записаться на прием</a>
                </div>
                <button className={showBurgerMenu ? `${s.burger} ${s.expanded}` : s.burger} onClick={() => {setShowBurgerMenu(!showBurgerMenu)}}>
                    <span className={s.bar_1}></span>
                    <span className={s.bar_2}></span>
                    <span className={s.bar_3}></span>
                </button>
            </div>
        </div>
        
    )
    
}

export default Navbar;