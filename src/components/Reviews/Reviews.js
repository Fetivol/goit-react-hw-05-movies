import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movie_id } = useParams();
  console.log(movie_id);
  return <div>Reviews</div>;
};

export default Reviews;
