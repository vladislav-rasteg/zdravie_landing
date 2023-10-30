import {useRef, useState, useEffect} from "react"
import {ReactComponent as Logo} from '../../assets/logo.svg'
import s from "./navbar.module.css"

const Navbar = () => {

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

export default Navbar;