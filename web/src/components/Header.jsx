import { Link } from 'react-router-dom';
import '../scss/layout/Header.scss';

function Header({ text }) {
  return (
    <header className="header">
      <nav className="header__nav">
        <Link to="/" className="header__nav--div">
          <i className="fa-solid fa-laptop-code"></i>
          <p className="text">{text}</p>
        </Link>

        <Link to="/newproject">
          <button className="addBtn">Añadir proyecto</button>
        </Link>
      </nav>

      <div className="header__title">
        <h1>Proyectos molones</h1>
        <h2>
          Escaparate en línea para recoger ideas a través de la tecnología
        </h2>
      </div>
    </header>
  );
}
export default Header;
