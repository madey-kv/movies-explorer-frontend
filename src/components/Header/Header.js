import logo from '../../images/logo.svg';
import './Header.css'
import {Link, useLocation} from "react-router-dom";
import userIcon from "../../images/user_icon.svg";
import Navigation from "../Navigation/Navigation";
import {useState} from "react";

function Header(props) {
    const closeNavBar = () => {
        setIsNavBarOpen(false)
    }

    const [isNavBarOpen, setIsNavBarOpen] = useState(false)
    const handleBurgerClick = () => { setIsNavBarOpen (true) }

    const location = useLocation();

    return (
        <header className="header">
            <Link to="/"><img className="header__logo" alt="Логотип" src={logo}/></Link>
            <div className={props.loggedIn ? "hidden" : "header__menu"}>
                <Link className="header__link link header__link_signup" to='/signup'>Регистрация</Link>
                <Link className="header__link link header__link_signin" to='/signin'>Войти</Link>
            </div>

            <div className={props.loggedIn ? "header__movie-links" : "hidden"}>
                <Link className="link header__link link header__link_movies-all" to='/movies'>Фильмы</Link>
                <Link className="link header__link link header__link_movies-user" to='/saved-movies'>Сохранённые фильмы</Link>
            </div>
            <Link className={props.loggedIn ? "link header__link link header__link_user": "hidden"} to='/profile'>Аккаунт <img src={userIcon} alt="" className="header__user"/></Link>

            <Navigation loggedIn={location.pathname !== '/'} isOpen={isNavBarOpen} onNavTab={handleBurgerClick} onClose={closeNavBar}/>
        </header>
    )
}

export default Header;
