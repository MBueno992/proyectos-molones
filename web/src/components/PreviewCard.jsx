import project from '../images/cover.jpeg';
import '../scss/layout/Card.scss';
import Card from './Projects/Card';
import PropTypes from 'prop-types';

function PreviewCard({ data }) {
  return (
    <section className="preview">
      <img
        className="imagePreview"
        src={data.image || project}
        alt={data.slogan || ''}
      />
      <Card data={data} />
    </section>
  );
}
PreviewCard.propTypes = {
  data: PropTypes.object,
};

export default PreviewCard;
