const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

export const MovieDetails = ({ movieDetails }) => {
  return (
    <div>
      {movieDetails.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
          alt={movieDetails.title}
          width={250}
        />
      ) : (
        <img src={defaultImg} alt="poster" width={250} />
      )}

      <div>
        <h2>{movieDetails.title}</h2>
        <p>User score: {Math.ceil((movieDetails.vote_average / 10) * 100)}%</p>
        <h3>Oerwiev</h3>
        <p>{movieDetails.overview}</p>
        <h4>Genres</h4>
        <p>
          {Array.isArray(movieDetails.genres)
            ? movieDetails.genres.map(elem => {
                return `${elem.name} `;
              })
            : 'No genres available'}
        </p>
      </div>
    </div>
  );
};
