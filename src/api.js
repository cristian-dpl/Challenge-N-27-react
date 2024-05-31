const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '3073b98001e9dfde0b586932733a6c90';

const fetchMovies = async () => {
  const response = await fetch(`${API_BASE_URL}/movie/popular?api_key=${API_KEY}`);
  if (!response.ok) {
    throw new Error('No se pudo hayar la pelicula');
  }
  return response.json();
};

const fetchMovieById = async (id) => {
  const response = await fetch(`${API_BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  if (!response.ok) {
    throw new Error(`No se pudo hayar la pelicula por ${id}`);
  }
  return response.json();
};

export { fetchMovies, fetchMovieById };