import { useState, useEffect } from 'react';
import { fetchMovies } from './api';
import { Link } from 'react-router-dom';

const Catalogo = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await fetchMovies();
        setMovies(data.results);
      } catch (error) {
        console.error(error);
      }
    };
    getMovies();
  }, []);

  return (
    <div className='catalogo-container'>
      <h1 className='title-catalogo'>Catalogo de peliculas</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id} className='list'>
            <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Catalogo;