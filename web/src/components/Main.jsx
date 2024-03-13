import PreviewCard from './PreviewCard';
import Form from './Form/Form';
import Button from './Button';
import '../scss/layout/Main.scss';
import PropTypes from 'prop-types';

function Main({
  data,
  handleChange,
  validation,
  urlCard,
  handleCreateCard,
  errorMsg,
  handleReset,
}) {
  return (
    <main className="mainBtn">
      <Button url="/" text="Ver proyectos" style="header__btnView" />
      <div className="mainSection">
        <PreviewCard data={data} />
        <Form
          handleChange={handleChange}
          validation={validation}
          urlCard={urlCard}
          handleCreateCard={handleCreateCard}
          errorMsg={errorMsg}
          data={data}
          handleReset={handleReset}
        />
      </div>
    </main>
  );
}

Main.propTypes = {
  data: PropTypes.object,
  handleChange: PropTypes.func,
  validation: PropTypes.func,
  urlCard: PropTypes.string,
  handleCreateCard: PropTypes.func,
  errorMsg: PropTypes.object,
  handleReset: PropTypes.func,
};

export default Main;
