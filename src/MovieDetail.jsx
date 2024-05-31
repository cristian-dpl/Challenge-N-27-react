import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchMovieById } from './api';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const data = await fetchMovieById(id);
        setMovie(data);
      } catch (error) {
        console.error(error);
      }
    };
    getMovie();
  }, [id]);

  if (!movie) {
    return <div className='loading'>Loading...</div>;
  }

  return (
    <div className='movie-detail'>
      <div>
        <h1 className='title-movieDetail'>{movie.title}</h1>
        <p className='text'>{movie.overview}</p>
        <p className='text'><b>Genero:</b> {movie.genres.map(genre => genre.name).join(', ')}</p>
        <p className='text'><b>Duracion:</b> {movie.runtime} minutos</p>
        <Link to="/catalog" className='link-catalogo'>Volver al catalogo</Link>
      </div>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
    </div>
  );
};

export default MovieDetail;