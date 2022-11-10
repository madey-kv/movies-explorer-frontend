import './AboutMe.css'
import student from '../../images/student.png';

function AboutMe() {
    return (
        <section className="about-me container">
                <h2 className="section__title">Студент</h2>
                <div className="section__line"></div>
                <div className="about-me__student">
                    <div className="about-me__info">
                        <h3 className="about-me__name">Виталий</h3>
                        <p className="about-me__profession">Фронтенд-разработчик, 30 лет</p>
                        <p className="about-me__biography">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                        <a href="https://github.com/madey-kv" target="_blank" className="link about-me__github" rel="noopener noreferrer">Github</a>
                    </div>
                    <img src={student} alt="фото студента" className="about-me__photo"/>
                </div>
        </section>
    )
}

export default AboutMe;
