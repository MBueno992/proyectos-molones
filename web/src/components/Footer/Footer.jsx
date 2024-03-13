import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import '../../scss/layout/Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <Link to="/know-me" className="footer__link">
        <img src={logo} alt="3-random" className="footer__link--logo" />
      </Link>
      <p>MBueno992 © 2024</p>
    </footer>
  );
}

export default Footer;
