export const SearchBar = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="query" placecholder="search your movie"></input>
      <button type="submit">Search</button>
    </form>
  );
};
