import '../../scss/layout/Form.scss';
import CreateCard from './CreateCard';
import FormInput from './FormInput';
import GetAvatar from '../GetAvatar';

function Form({
  handleChange,
  validation,
  handleCreateCard,
  urlCard,
  errorMsg,
  data,
  handleReset,
}) {
  const handleInput = (ev) => {
    const inputId = ev.target.id;
    const inputValue = ev.target.value;
    handleChange(inputId, inputValue);
  };
  return (
    <section className="form" onChange={handleInput}>
      <h2 className="form__title">Información</h2>

      <div className="form__subtitle">
        <p className="form__subtitle--text">Cuéntanos sobre el proyecto</p>
        <hr className="form__subtitle--line" />
      </div>

      <fieldset className="formProject">
        <FormInput
          placeholder="Nombre del proyecto"
          name="name"
          id="name"
          data={data.name}
          handleChange={handleChange}
        />
        <span className="formProject__error">{errorMsg.name}</span>
        <FormInput
          placeholder="Slogan"
          name="slogan"
          id="slogan"
          data={data.slogan}
        />
        <span className="formProject__error">{errorMsg.slogan}</span>
        <div className="demo">
          <FormInput
            placeholder="Repo"
            name="repo"
            id="repo"
            data={data.repo}
          />
          <FormInput
            placeholder="Demo"
            name="demo"
            id="demo"
            data={data.demo}
          />
        </div>
        <span className="formProject__error">{errorMsg.repo}</span>
        <span className="formProject__error">{errorMsg.demo}</span>
        <FormInput
          placeholder="Tecnologías"
          name="technologies"
          id="technologies"
          data={data.technologies}
        />
        <span className="formProject__error">{errorMsg.technologies}</span>
        <textarea
          className="formProject__textarea"
          type="text"
          placeholder="Descripción"
          name="desc"
          id="desc"
          value={data.desc}
        ></textarea>
        <span className="formProject__error">{errorMsg.desc}</span>
      </fieldset>

      <div className="form__subtitle">
        <p className="form__subtitle--text">Cuéntanos sobre la autora</p>
        <hr className="form__subtitle--line" />
      </div>

      <fieldset className="formProject">
        <FormInput
          placeholder="Nombre"
          name="author"
          id="author"
          data={data.author}
        />
        <span className="formProject__error">{errorMsg.author}</span>
        <FormInput placeholder="Trabajo" name="job" id="job" data={data.job} />
        <span className="formProject__error">{errorMsg.job}</span>
      </fieldset>
      <section className="buttons-img">
        <div className="buttons-img__btn">
          <GetAvatar
            updateAvatar={handleChange}
            text="Subir foto de proyecto"
            id="image"
          />
          <GetAvatar
            updateAvatar={handleChange}
            text="Subir foto de autora"
            id="photo"
          />
        </div>
        <div className="buttons-img__errorMsg">
          <span className="formProject__error">{errorMsg.image}</span>
          <span className="formProject__error">{errorMsg.photo}</span>
        </div>
      </section>
      <section className="buttons-img">
        <button
          className="buttons-img__btn-large"
          type="submit"
          onClick={handleCreateCard}
        >
          Crear Tarjeta
        </button>
        <button className="buttons-img__btn-reset" onClick={handleReset}>
          Reset
        </button>
      </section>

      <CreateCard urlCard={urlCard} validation={validation} />
    </section>
  );
}

export default Form;
