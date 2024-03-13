import '../../scss/layout/KnowMe.scss';

function About({ image, nombre, quote, desc, linkedin, github, newStyle }) {
  return (
    <section className="personal">
      <div className="personal__top">
        <i className="fa-solid fa-window-minimize personal__top--dot"></i>
        <i className="fa-regular fa-square personal__top--dot"></i>
        <i className="fa-solid fa-xmark personal__top--dot"></i>
      </div>
      <article className={`personal__card ${newStyle}`}>
        <img src={image} alt={nombre} className="personal__card--image" />

        <div className="personalData">
          <h2 className="personalData__name">{nombre}</h2>
          <h3 className="personalData__quote">{quote || 'frase'}</h3>
          <p className="personalData__desc">{desc}</p>
          <div className="personalData__links">
            <a href={linkedin} target="_blank" rel="noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href={github} target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}

export default About;
