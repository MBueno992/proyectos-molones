function CreateCard({ urlCard, validation }) {
  return (
    <section className="url">
      <span className=""> {validation || ''} </span>
      <a href={urlCard} className="url__link" target="_blank" rel="noreferrer">
        {urlCard}
      </a>
    </section>
  );
}

export default CreateCard;
