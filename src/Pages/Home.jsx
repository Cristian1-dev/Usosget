import './Styles/Home.css'

export const Home = () => {
    return (
        <section className="home">
            <div className="home__grid"></div>

            <div className="home__orb home__orb--1"></div>
            <div className="home__orb home__orb--2"></div>
            <div className="home__orb home__orb--3"></div>

            <div className="home__ring"></div>

            <span className="home__spark"></span>
            <span className="home__spark"></span>
            <span className="home__spark"></span>
            <span className="home__spark"></span>
            <span className="home__spark"></span>
            <span className="home__spark"></span>
            <span className="home__spark"></span>
            <span className="home__spark"></span>

            <div className="home__content">
                <p className="home__subtitle">Usos de</p>
                <h1 className="home__title">GET</h1>
                <div className="home__line"></div>
            </div>
        </section>
    )
}
