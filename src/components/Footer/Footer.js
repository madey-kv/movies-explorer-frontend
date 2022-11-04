import './Footer.css'

function Footer() {
    return (
        <section className="footer">
                <p className="footer_copyright">Учебный проект Яндекс.Практикум х BeatFilm.</p>
                <div className="footer__underline"></div>
                <div className="footer__info">
                    <p className="footer__year">&copy;2022</p>
                    <div className="footer__links">
                        <a href="https://practicum.yandex.ru/" className="link footer__link" target="_blank" rel="noopener noreferrer">Яндекс.Практикум</a>
                        <a href="https://github.com/" className="link footer__link" target="_blank" rel="noopener noreferrer">Github</a>
                    </div>
                </div>
        </section>
    )
}

export default Footer;
