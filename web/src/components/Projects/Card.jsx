import '../../scss/layout/Card.scss';
import user from '../../images/user.svg';
import PropTypes from 'prop-types';

function Card({ data, style }) {
  const { name, slogan, technologies, repo, demo, desc, author, job, photo } =
    data;
  return (
    <section className={`card ${style}`}>
      <div className="card__top">
        <div className="card__top--dot dot1"></div>
        <div className="card__top--dot dot2"></div>
        <div className="card__top--dot dot3"></div>
      </div>
      <div className="info">
        <section className="info__project">
          <p className="info__project--subtitle">Personal Project Card</p>
          <hr className="info__project--line" />
          <a
            href={`https://proyectos-molones-xz0d.onrender.com${data.idProject}`}
            target="_blank"
            rel="noreferrer"
          >
            <h2 className="info__project--title">
              {name || 'Elegant Workspace'}
            </h2>
          </a>
          <p className="info__project--slogan">
            {slogan || 'Diseños Exclusivos'}
          </p>
          <p className="info__project--description">Product Description</p>
          <p className="info__project--desc">
            {desc ||
              'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere recusandae, ipsum laboriosam optio aliquam ad, magnam, dolorum quisquam aliquid consectetur iste quidem doloremque quis eligendi sequi numquam! Vel, aliquam mollitia?'}
          </p>
          <section className="info__technologies">
            <p className="info__technologies--text">
              {' '}
              {technologies || 'React JS - MongoDB'}
            </p>
            <div className="info__technologies--icon">
              <a href={demo || ''} target="_blank" rel="noopener noreferrer">
                <i className="fa-solid fa-globe"></i>
              </a>
              <a href={repo || ''} target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </section>
        </section>
        <section className="info__author">
          <img
            className="info__author--image"
            src={photo || user}
            alt={author || ''}
          />
          <p className="info__author--job">{job || 'Full Stack Developer'}</p>
          <p className="info__author--name">{author || 'Ada Lovelace'}</p>
        </section>
      </div>
    </section>
  );
}

Card.propTypes = {
  data: PropTypes.object,
  style: PropTypes.string,
};

export default Card;
