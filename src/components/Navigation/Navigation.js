import { Link  } from 'react-router-dom';


function Navigation() {

    

    return (
        <section className="navigation">
            <div className="navigation__container">
                <Link to="/" className="navigation__title">Главная</Link>
                <Link to="/testing" className="navigation__title">Тесты</Link>
                {/* <Link to="/texts" className="navigation__title">Тексты</Link>
                <Link to="/vocabulary" className="navigation__title">Лексика</Link> */}
                <Link to="/interesting" className="navigation__title">Интересное</Link>
                <Link to="/cheloveki" className="navigation__title">Человеки</Link>
            </div>
        </section>
    );
}

export default Navigation;