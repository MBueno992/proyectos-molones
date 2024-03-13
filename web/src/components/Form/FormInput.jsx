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

export default FormInput;
