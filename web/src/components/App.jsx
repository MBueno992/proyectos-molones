// Fichero src/components/App.jsx
import { useEffect, useState } from 'react';
import '../scss/App.scss';
import Header from './Header';
import Main from './Main';
import Footer from './Footer/Footer';
import local from '../services/localStorage';
import { Route, Routes } from 'react-router-dom';
import KnowUs from './Footer/KnowMe';
import ProjectsList from './Projects/ProjectsList';

function App() {
  const [data, setData] = useState(
    local.get('dataProject', {
      name: '',
      slogan: '',
      repo: '',
      demo: '',
      technologies: '',
      desc: '',
      author: '',
      job: '',
    })
  );
  const [validation, setValidation] = useState('');
  const [urlCard, setUrlCard] = useState('');
  const [errorMsg, setErrorMsg] = useState({});
  const [project, setProject] = useState([]);

  const dataForm = (key, value) => {
    setData({ ...data, [key]: value });
  };

  useEffect(() => {
    local.set('dataProject', data);
  }, [data]);

  useEffect(() => {
    fetch('http://localhost:4000/projects')
      .then((response) => response.json())
      .then((data) => {
        setProject(data.data);
      });
  }, []);

  const validateForm = () => {
    const errors = {};
    if (!data.name) {
      errors.name = 'El nombre del proyecto es obligatorio';
    }
    if (!data.slogan) {
      errors.slogan = 'El slogan es obligatorio';
    }
    if (!data.repo) {
      errors.repo = 'La URL del repositorio es obligatoria';
    } else if (!/^https?:\/\/\S+$/.test(data.repo)) {
      errors.repo = 'La URL del repositorio no es válida';
    }
    if (!data.demo) {
      errors.demo = 'La URL de la demo es obligatoria';
    } else if (!/^https?:\/\/\S+$/.test(data.demo)) {
      errors.repo = 'La URL de al demo no es válida';
    }
    if (!data.technologies) {
      errors.technologies = 'Las tecnologias utilizadas son obligatorias';
    }
    if (!data.desc) {
      errors.desc = 'La desripción del proyecto es obligatoria';
    }
    if (!data.author) {
      errors.author = 'El nombre del autor es obligatorio';
    }
    if (!data.job) {
      errors.job = 'El trabajo del autor es obligatorio';
    }
    if (!data.image) {
      errors.image = 'La imagen del proyecto es obligatoria ';
    }
    if (!data.photo) {
      errors.photo = 'La imagen del autor es obligatoria ';
    }

    setErrorMsg(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      handleCreateCard();
    } else {
      setValidation('Ha habido algún error, revisa el formulario');
      setUrlCard('');
    }
  };

  const handleReset = () => {
    setData({
      name: '',
      slogan: '',
      repo: '',
      demo: '',
      technologies: '',
      desc: '',
      author: '',
      job: '',
    });
    local.clear();
    setErrorMsg({});
    setUrlCard('');
    setValidation('');
  };

  const handleCreateCard = () => {
    fetch('http://localhost:4000/newProject', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-type': 'application/json' },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setUrlCard(result.cardURL);
        setValidation('La tarjeta ha sido creada');
      });
  };

  return (
    <div className="container">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header text="Proyectos molones" />
              <ProjectsList project={project} />
            </>
          }
        />
        <Route
          path="/newProject"
          element={
            <>
              <Header text="Volver al inicio" />
              <Main
                data={data}
                handleChange={dataForm}
                validation={validation}
                urlCard={urlCard}
                handleCreateCard={handleSubmit}
                errorMsg={errorMsg}
                handleReset={handleReset}
              />
            </>
          }
        />
        <Route
          path="/know-me"
          element={
            <>
              <Header text="Volver al inicio" />
              <KnowUs />
            </>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
