import { fetchMovieReviews } from 'components/Data/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ListWrapper, ListElement, AuthorStyled, Text } from './Reviews.styled';

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
    <ListWrapper>
      {reviews.map(({ author, content, id }) => {
        return (
          <ListElement key={id}>
            <AuthorStyled>Author: {author}</AuthorStyled>
            <p>{content}</p>
          </ListElement>
        );
      })}
    </ListWrapper>
  ) : (
    <Text>We don't have any reviews for this movie.</Text>
  );
};

export default Reviews;
