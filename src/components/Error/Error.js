import './Error.css'
import {Link} from "react-router-dom";

function Error() {

    return (
        <section className="error">
            <h2 className="error__text">404</h2>
            <p className="error__description">Страница не найдена</p>
            <Link to="/" className="link error__link">Назад</Link>
        </section>
    )
}

export default Error;
