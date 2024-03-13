import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Button({ url, text, style }) {
  return (
    <Link to={url} className={style}>
      {text}
    </Link>
  );
}
Button.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string,
  style: PropTypes.string,
};

export default Button;
