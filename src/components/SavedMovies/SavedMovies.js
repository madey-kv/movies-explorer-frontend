import './SavedMovies.css'
import HeaderMovies from "../Header/HeaderMovies";
import SearchForm from "../SearchForm/SearchForm";
import NotFound from "../NotFound/NotFound";
import Footer from "../Footer/Footer";

function SavedMovies() {

    return (
        <>
            <HeaderMovies />
            <SearchForm />
            <NotFound />
            <Footer />
        </>
    )
}

export default SavedMovies;
