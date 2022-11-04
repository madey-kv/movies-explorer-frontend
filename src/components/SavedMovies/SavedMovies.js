import './SavedMovies.css'
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import NotFound from "../NotFound/NotFound";
import Footer from "../Footer/Footer";

function SavedMovies() {

    return (
        <>
            <Header loggedIn={true}/>
            <SearchForm />
            <NotFound />
            <Footer />
        </>
    )
}

export default SavedMovies;
