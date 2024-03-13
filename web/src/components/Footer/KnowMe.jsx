import About from './About';
import Marta from '../../images/Marta.jpeg';
import Button from '../Button';

function KnowMe() {
  return (
    <div className="aboutCards">
      <Button url="/" text="Ver proyectos" style="header__title--see-btn" />
      <About
        image={Marta}
        nombre="Marta Bueno"
        quote="Que no te digan que el cielo es el límite cuando hay huellas en la luna."
        desc="Constante, perseverante, paciente y resolutiva. Spy una joven apasionada por este mundo de la programación que acabo de descubrir. Con ganas de aprender cosas nuevas, de continuar creciendo en este mundo que se abre frente a mi lleno de oportunidades y con ganas de demostrar lo que soy capaz de hacer."
        linkedin="https://www.linkedin.com/in/mbueno992/"
        github="https://github.com/MBueno992"
      />
    </div>
  );
}

export default KnowMe;
