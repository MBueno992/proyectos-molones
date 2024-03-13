import Card from './Card';
import '../../scss/layout/Landing.scss';
import Button from '../Button';
import PropTypes from 'prop-types';

function ProjectsList({ project }) {
  const renderProjectCards = project.map((data, i) => {
    return <Card data={data} key={i} style="cardProject" />;
  });
  return (
    <>
      <Button
        url="/newproject"
        text="Añadir proyectos"
        style="header__btnAdd"
      />

      <div className="landing__cards">{renderProjectCards}</div>
    </>
  );
}

ProjectsList.propTypes = {
  project: PropTypes.array,
};

export default ProjectsList;
