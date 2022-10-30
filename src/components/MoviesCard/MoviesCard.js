import './MoviesCard.css'
import movie from '../../images/movie.png';

function MoviesCard() {

    return (
        <li className="card__item">
            <img src={movie} alt="фильм"  className="card__photo" />
            <div className="cards__text">
                <div className="card__info">
                    <h2 className="card__title">Бег это свобода</h2>
                     <p className="card__duration">1ч 44м</p>
                </div>
                <button className="button button_like" type="button"></button>
            </div>
        </li>
    )
}

export default MoviesCard;
