import About from './About';
import Marta from '../../images/Marta.jpeg';
import Carolina from '../../images/Carolina.jpeg';
import Rosa from '../../images/Rosa.jpeg';

function KnowUs() {
  return (
    <div className="aboutCards">
      <About
        image={Marta}
        nombre="Marta Bueno"
        quote="Que no te digan que el cielo es el límite cuando hay huellas en la luna."
        desc="Constante, perseverante, paciente y resolutiva. Así es esta joven apasionada por el mundo de la programación que acabde descubrir. Con ganas de aprender cosas nuevas, de continuar creciendo en este mundo que se abre frente a ella lleno de oportunidades y con ganas de demostrar lo que es capaz de hacer."
        linkedin="https://www.linkedin.com/in/mbueno992/"
        github="https://github.com/MBueno992"
      />
      <About
        newStyle="reverse"
        image={Carolina}
        nombre="Carolina Rodríguez"
        quote="Esfuerzo por excelencia, codificando con resiliencia"
        desc="Luchadora, decidida, sin miedo al éxito. Seria cuando tiene que serlo y un amor de persona cuando la conoces, dispuesta a ayudar y echar una mano siempre que puede. Siempre un paso por delante de los acontecimientos y predispuesta a todo. ¿Quién no quiere tener una persona así en su equipo?."
        linkedin="https://www.linkedin.com/in/carolinarodrp/"
        github="https://github.com/carodriguezp"
      />
      <About
        image={Rosa}
        nombre="Rosa Ponce"
        quote="Todo lo que necesitas para ser feliz se encuentra al otro lado de tus miedos."
        desc="El equilibrio del equipo. Paciente, constante y perseverante con ganas de darse a valer. Sabe escuchar, comprender y entender a su equipo. Siempre está dispuesta a continuar aprendiendo y evolucionando en este nuevo mundo que se nos abre a todas. Con ganas de darse a valer y de llegar muy lejos. "
        linkedin="https://www.linkedin.com/in/rosa-ponce-espin/"
        github="https://github.com/rosapon"
      />
    </div>
  );
}

export default KnowUs;
