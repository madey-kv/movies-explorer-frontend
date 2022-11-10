import './Navigation.css'
import {Link, NavLink} from "react-router-dom";
import burger from '../../images/burger.svg';
import burgerClose from '../../images/burger-close.svg';
import userIcon from '../../images/user_icon.svg';

function Navigation(props) {

    return (
        <>
            <button className={props.loggedIn ? "navigation__burger" : "hidden"} onClick={()=>props.onNavTab()}><img src={burger} className="navigation__burger-button" alt=""/></button>
            <div className={`navigation__navbar ${props.isOpen && 'navigation__navbar_active'}`}>
                <section className="navigation navigation_active">
                    <nav className="navigation__container">
                        <button className="navigation__close" onClick={()=>props.onClose()}><img src={burgerClose} alt=""/></button>
                        <ul className="navigation__list">
                            <li className="navigation__item">
                                <NavLink exact to ="/" className="navigation__link" activeClassName="navigation__link_active">Главная</NavLink>
                            </li>
                            <li className="navigation__item">
                                <NavLink to="/movies" className="navigation__link" activeClassName="navigation__link_active">Фильмы</NavLink>
                            </li>
                            <li className="navigation__item">
                                <NavLink to="/saved-movies" className="navigation__link" activeClassName="navigation__link_active">Сохранённые фильмы</NavLink>
                            </li>
                        </ul>
                        <Link className="link header__link link header__link_user navigation__user" to='/profile'>Аккаунт <img src={userIcon} alt="" className="header__user"/></Link>
                    </nav>
                </section>
            </div>
        </>
    )
}

export default Navigation;
