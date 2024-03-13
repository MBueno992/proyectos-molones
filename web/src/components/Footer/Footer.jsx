import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import '../../scss/layout/Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <Link to="/know-us" className="footer__link">
        <img src={logo} alt="3-random" className="footer__link--logo" />
      </Link>
      <p>3-random © 2024</p>
    </footer>
  );
}

export default Footer;
