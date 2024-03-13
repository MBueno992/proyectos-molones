import project from '../images/cover.jpeg';
import '../scss/layout/Card.scss';
import Card from './Projects/Card';

function PreviewCard({ data }) {
  const {
    name,
    slogan,
    technologies,
    repo,
    demo,
    desc,
    autor,
    job,
    photo,
    image,
  } = data;

  return (
    <section className="preview">
      <img className="imagePreview" src={image || project} alt={slogan || ''} />
      <Card data={data} />
    </section>
  );
}

export default PreviewCard;
