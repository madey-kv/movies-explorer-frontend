import './Portfolio.css'

function Portfolio() {
    return (
        <section className="portfolio">
            <div className="container">
                <h2 className="portfolio__title">Портфолио</h2>
                <ul className="portfolio__projects">
                    <li className="portfolio__project">
                        <a href="https://github.com/madey-kv/how-to-learn" className="link portfolio__link" target="_blank" rel="noopener noreferrer">
                            <p className="portfolio__project-name">Статичный сайт</p>
                            <p className="project__arrow">↗</p>
                        </a>
                        <div className="portfolio__underline"></div>
                    </li>
                    <li className="portfolio__project">
                        <a href="https://github.com/madey-kv/russian-travel" className="link portfolio__link" target="_blank" rel="noopener noreferrer">
                            <p className="portfolio__project-name">Адаптивный сайт</p>
                            <p className="project__arrow">↗</p>
                        </a>
                        <div className="portfolio__underline"></div>
                    </li>
                    <li className="portfolio__project">
                        <a href="https://github.com/madey-kv/react-mesto-api-full" className="link portfolio__link" target="_blank" rel="noopener noreferrer">
                            <p className="portfolio__project-name">Одностраничное приложение</p>
                            <p className="project__arrow">↗</p>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Portfolio;
