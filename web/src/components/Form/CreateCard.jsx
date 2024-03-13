import PropTypes from 'prop-types';

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

CreateCard.propTypes = {
  urlCard: PropTypes.string,
  validation: PropTypes.func,
};
export default CreateCard;
