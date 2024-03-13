import '../scss/layout/Landing.scss';
import Login from './Login';
import Button from './Button';
// import example from '../images/example.png';

function Landing({ loginUser, alertMsg, loginInput }) {
  return (
    <div className="landing">
      <Button
        url="/"
        text="Acceder como invitado"
        style="header__title--see-btn guest"
      />
      <Login
        loginUser={loginUser}
        loginInput={loginInput}
        alertMsg={alertMsg}
      />
    </div>
  );
}

export default Landing;
