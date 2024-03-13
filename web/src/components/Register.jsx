function Register() {
  return (
    <section className="login">
      <form className="login__form">
        <h3>Regístrate</h3>
        <label>Nombre de usuario </label>
        <input type="text" />
        <label>Email </label>
        <input type="text" />
        <label>Contraseña</label>
        <input type="password" />
        <button className="login__form--login">Regístrate</button>
      </form>
    </section>
  );
}

export default Register;
