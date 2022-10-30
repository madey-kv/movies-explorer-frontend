import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
    return (
        <div className="container">
            <div className="cards__movies">
                <section className="cards__list">
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                </section>
                <button className="button cards__button">Еще</button>
            </div>
        </div>
    )
}

export default MoviesCardList;
