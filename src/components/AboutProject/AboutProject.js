import './AboutProject.css'

function AboutProject() {
    return (
        <section className="about-project">
            <div className="container">
                <h2 className="section__title">О проекте</h2>
                <div className="section__line"></div>
                <ul className="about-project__list">
                    <li className="about-project__item">
                        <h3 className="about-project__item-title">Дипломный проект включал 5 этапов</h3>
                        <p className="about-project__item-description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                    </li>
                    <li className="about-project__item">
                        <h3 className="about-project__item-title">На выполнение диплома ушло 5 недель</h3>
                        <p className="about-project__item-description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                    </li>
                </ul>
                <ul className="about-project__infographics">
                    <li className="about-project__backend">
                        <p className="about-project__duration about-project__duration_backend">1 неделя</p>
                        <p className="about-project__duration-text">Back-end</p>
                    </li>
                    <li className="about-project__frontend">
                        <p className="about-project__duration about-project__duration_frontend">4 недели</p>
                        <p className="about-project__duration-text">Front-end</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default AboutProject;
