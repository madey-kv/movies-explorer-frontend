import logo from '../../images/logo.svg';
import './Header.css'
import {Link} from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <Link to="/"><img className="header__logo" alt="Логотип" src={logo}/></Link>
            <div className="header__menu">
                <Link className="header__link link header__link_signin" to='/signup'>Регистрация</Link>
                <Link className="header__link link header__link_signup" to='/signin'>Войти</Link>
            </div>
        </header>
    )
}

export default Header;
