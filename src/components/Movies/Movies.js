import './Movies.css'
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from "../SearchForm/SearchForm";
import HeaderMovies from "../Header/HeaderMovies";
import Footer from "../Footer/Footer";

function Movies() {
    return (
        <>
            <HeaderMovies />
            <SearchForm />
            <MoviesCardList />
            <Footer />
        </>
    )
}

export default Movies;
