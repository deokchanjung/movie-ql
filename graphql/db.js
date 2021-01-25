export let movies = [];

export const getMovies = () => movies;

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score
  };
  movies.push(newMovie);
  return newMovie;
};

export const deleteMovie = id => {
  console.log(id);
  const newMovies = movies.filter(movie => movie.id !== id);
  if (movies.length === newMovies.length) {
    return false;
  }
  movies = newMovies;
  return true;
};
