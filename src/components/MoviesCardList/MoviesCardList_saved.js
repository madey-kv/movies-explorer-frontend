import './MoviesCardList.css'
import MoviesCard_saved from "../MoviesCard/MoviesCard_saved";

function MoviesCardList() {
    return (
        <div className="cards__movies">
            <section className="cards__list">
                <MoviesCard_saved />
                <MoviesCard_saved />
                <MoviesCard_saved />
                <MoviesCard_saved />
                <MoviesCard_saved />
                <MoviesCard_saved />
                <MoviesCard_saved />
                <MoviesCard_saved />
                <MoviesCard_saved />
                <MoviesCard_saved />
                <MoviesCard_saved />
                <MoviesCard_saved />
            </section>
            <button className="button cards__button">Еще</button>
        </div>
    )
}

export default MoviesCardList;
