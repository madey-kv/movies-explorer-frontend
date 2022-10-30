import logo from '../../images/logo.svg';
import userIcon from '../../images/user_icon.svg';
import './Header.css'
import {Link} from "react-router-dom";

function HeaderMovies() {
    return (
        <header className="header">
            <Link to="/"><img className="header__logo" alt="Логотип" src={logo}/></Link>
            <div className="header__movie-links">
                <Link className="link header__link link header__link_movies-all" to='/movies'>Фильмы</Link>
                <Link className="link header__link link header__link_movies-user" to='/saved-movies'>Сохранённые фильмы</Link>
            </div>
            <Link className="link header__link link header__link_user" to='/profile'>Аккаунт <img src={userIcon} alt="" className="header__user"/></Link>
        </header>
    )
}

export default HeaderMovies;
