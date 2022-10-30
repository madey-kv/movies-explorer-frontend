import logo from '../../images/logo.svg';
import '../Register/Register.css'
import {Link} from "react-router-dom";

function Login() {

    return (
        <section className="register">
            <Link to="/"><img className="form__logo" alt="Логотип" src={logo}/></Link>

            <form className="form form_registration" name="sign-up" action="#" method="get">
                <fieldset className="form__fieldset">
                    <legend className="form__title">Рады видеть!</legend>
                    <ul className="form__items">
                        <li className="form__item">
                            <label className="form__label" htmlFor="email">E-mail</label>
                            <input className="form__input" id="email" name="email" placeholder="Введите email" type="email"
                                   required minLength={2} maxLength={50}></input>
                        </li>
                        <li className="form__item">
                            <label className="form__label" htmlFor="password">Пароль</label>
                            <input className="form__input" placeholder="Введите пароль" type="password" required id="password"
                                   name="password" minLength={8} maxLength={20}></input>
                        </li>
                    </ul>
                </fieldset>

                <Link to="/movies" className="link form__button form__button_signup button">Войти</Link>
                <p className="form__change">Ещё не зарегистрированы?&nbsp;
                    <Link to="/signin" className="link form__change form__change_link">Регистрация</Link>
                </p>
            </form>
        </section>
    )
}

export default Login;
