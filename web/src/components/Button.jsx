import { Link } from 'react-router-dom';

function Button({ url, text, style }) {
  return (
    <Link to={url} className={style}>
      {text}
    </Link>
  );
}

export default Button;
