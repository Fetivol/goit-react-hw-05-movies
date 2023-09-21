import { fetchMovieReviews } from 'Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movie_id } = useParams();
  const [reviews, setMovieReviews] = useState([]);

  useEffect(() => {
    if (!movie_id) {
      return;
    }
    async function getMovieReviews() {
      try {
        const movieCast = await fetchMovieReviews(movie_id);
        setMovieReviews(movieCast.results);
      } catch (error) {
        console.error(error);
      } finally {
      }
    }

    getMovieReviews();
  }, [movie_id]);

  return reviews.length > 0 ? (
    <ul>
      {reviews.map(({ author, content, id }) => {
        return (
          <li key={id}>
            <h3>Author: {author}</h3>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  ) : (
    <p>We don't have any reviews for this movie.</p>
  );
};

export default Reviews;
