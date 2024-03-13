import user from '../images/user.svg';

function CardProject({ data }) {
  const {
    name,
    slogan,
    technologies,
    repo,
    demo,
    desc,
    nameAuthor,
    job,
    imageAuthor,
  } = data;

  return (
    <section className="card">
      <section className="card__project">
        <p className="card__project--subtitle">Personal Project Card</p>
        <hr className="card__project--line" />
        <a
          href={`https://project-promo-v-module-4-team-3.onrender.com/detail/${data.idProject}`}
        >
          <h2 className="card__project--title">
            {name || 'Elegant Workspace'}
          </h2>
        </a>
        <p className="card__project--slogan">
          {slogan || 'Diseños Exclusivos'}
        </p>
        <p className="card__project--description">Product Description</p>
        <p className="card__project--desc">
          {desc ||
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere recusandae, ipsum laboriosam optio aliquam ad, magnam, dolorum quisquam aliquid consectetur iste quidem doloremque quis eligendi sequi numquam! Vel, aliquam mollitia?'}
        </p>
        <section className="card__technologies">
          <p className="card__technologies--text">
            {' '}
            {technologies || 'React JS - MongoDB'}
          </p>
          <div className="card__technologies--icon">
            <a href={demo || ''} target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-globe"></i>
            </a>
            <a href={repo || ''} target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </section>
      </section>

      <section className="card__info">
        <img
          className="card__info--image"
          src={imageAuthor || user}
          alt={nameAuthor || ''}
        />
        <p className="card__info--job">{job || 'Full Stack Developer'}</p>
        <p className="card__info--name">{nameAuthor || 'Emmelie Björklund'}</p>
      </section>
    </section>
  );
}

export default CardProject;
