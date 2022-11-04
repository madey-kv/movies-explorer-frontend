import './Profile.css'
import React from "react";
import {Link} from "react-router-dom";
import Header from "../Header/Header";

function Profile() {

    return (
        <>
           <Header loggedIn={true}/>
            <form className="form form_change-profile" name="change-user" action="#" method="get">
                <fieldset className="form__fieldset form__fieldset_profile">
                    <legend className="form__title form__title_profile">Привет, username!</legend>
                    <ul className="form__items form__items_profile">
                        <li className="form__item form__item_profile">
                            <label className="form__label form__label_profile" htmlFor="name">Имя</label>
                            <input className="form__input form__input_profile" name="name" id="name" placeholder="Ваше имя"
                                   type="text" required minLength={2} maxLength={30} defaultValue="username"></input>
                        </li>
                        <div className="profile__underline"></div>
                        <li className="form__item form__item_profile">
                            <label className="form__label form__label_profile" htmlFor="email">E-mail</label>
                            <input className="form__input form__input_profile" id="email" name="email" placeholder="Введите email" type="email"
                                   required minLength={2} maxLength={50} defaultValue="user@email.com"></input>
                        </li>
                    </ul>
                </fieldset>
                <button className="button button__profile">Редактировать</button>
                <Link to="/signin" className="link form__link">Выйти из аккаунта</Link>
            </form>
        </>
    )
}

export default Profile;
