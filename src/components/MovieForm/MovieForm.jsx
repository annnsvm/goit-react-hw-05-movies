const MovieForm = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();

    const query = e.target.elements.query.value;

    onSubmit(query);
    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input name="query" type="text" />
      <button type="submit">Search</button>
    </form>
  );
};

export default MovieForm;
