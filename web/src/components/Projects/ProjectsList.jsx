import Card from './Card';
import '../../scss/layout/Landing.scss';
import Button from '../Button';

function ProjectsList({ project }) {
  console.log(project);
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

export default ProjectsList;
