// import { useEffect } from "react";

import { Link } from 'react-router-dom';

const Movies = () => {
  // Use state
  // useEffect(() => {
  //     http request
  // })
  return (
    <div>
      <form>
        <input
          type="text"
          name="movie"
          placecholder="search your movie"
        ></input>
        <button type="submit">Search</button>
      </form>
      Movies list
      <br />
      <Link to="`{1}`">Movie page</Link>
      {/* to={`${movie}`} */}
    </div>
  );
};

export default Movies;
