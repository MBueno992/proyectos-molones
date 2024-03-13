import Card from './Card';

function ProjectsList({ project }) {
  console.log(project);
  const renderProjectCards = project.map((data, i) => {
    return <Card data={data} key={i} style="cardProject" />;
  });
  return <div className="landing__cards">{renderProjectCards}</div>;
}

export default ProjectsList;
