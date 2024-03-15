import PropTypes from 'prop-types';

function FormInput({ placeholder, name, id, data }) {
  return (
    <>
      <input
        className="formProject__input"
        type="text"
        placeholder={placeholder}
        name={name}
        id={id}
        value={data}
      />
    </>
  );
}

FormInput.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  data: PropTypes.string,
};

export default FormInput;
