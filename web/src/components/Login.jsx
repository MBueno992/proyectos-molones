import { Link } from 'react-router-dom';
import '../scss/layout/Login.scss';

function Login({ loginUser, alertMsg, loginInput }) {
  const handleClick = (ev) => {
    ev.preventDefault();
    loginUser();
  };

  return (
    <section className="login">
      <form
        className="login__form"
        onChange={(ev) => {
          loginInput(ev);
        }}
      >
        <h3>Iniciar sesión</h3>
        <label>E-mail</label>
        <input type="text" id="email" />
        <label>Contraseña</label>
        <input type="password" id="password" />
        <button className="login__form--login" onClick={handleClick}>
          Iniciar sesión
        </button>
        <div className="login__form--text">
          <p>¿Aún no tienes cuenta?</p>
          <Link to="/register">Regístrate aquí</Link>
          <p className="login__form--msg">{alertMsg}</p>
        </div>
      </form>
    </section>
  );
}

export default Login;
