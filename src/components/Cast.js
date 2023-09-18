import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movie_id } = useParams();
  console.log(movie_id);
  return <div>Cast</div>;
};

export default Cast;
