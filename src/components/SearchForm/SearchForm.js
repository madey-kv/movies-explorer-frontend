import './SearchForm.css'
import lightIcon from "../../images/search_icon_light.svg"
import darkIcon from "../../images/search_icon_dark.svg"

function SearchForm() {

    return (
        <div className="search__form">
            <fieldset className="search__container">
                <img src={lightIcon} alt="" className="search__icon"/>
                <input type="email" className="search__input" id="search" placeholder="Фильм"
                       required />
                <button type="submit" className="button button_search"><img src={darkIcon} alt="" className="search__button"/></button>
            </fieldset>
            <div className="search__checkbox-container">
                <div className="search__checkbox-switch">
                    <input className="search__checkbox" type="checkbox" id="mute"/>
                    <label htmlFor="search__checkbox-switch" className="search__label"></label>
                </div>
                <p className="search__checkbox-text">Короткометражки</p>
            </div>
        </div>
    )
}

export default SearchForm;
