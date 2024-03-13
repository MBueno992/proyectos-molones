import '../scss/layout/Header.scss';

function Header() {
  return (
    <header className="header">
      <div className="header__text">
        <i className="fa-solid fa-laptop-code header__text--icon"></i>
        <h1 className="header__text--title">Proyectos molones</h1>
      </div>
      <h2 className="header__text--subtitle">
        Escaparate en línea para recoger ideas a través de la tecnología
      </h2>
    </header>
  );
}
export default Header;
