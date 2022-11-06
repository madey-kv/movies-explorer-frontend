import './Movies.css'
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Movies() {
    return (
        <>
            <SearchForm />
            <MoviesCardList />
        </>
    )
}

export default Movies;
