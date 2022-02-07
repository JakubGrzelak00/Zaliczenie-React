export const movieFilter = (movies, word) => {
  let filterdMovies = [];
  movies.forEach((movie) => {
    if (
      movie.title.toLowerCase().includes(word.toLowerCase()) ||
      movie.studio.toLowerCase().includes(word.toLowerCase()) ||
      checkTags(movie.tags, word)
    ) {
      filterdMovies.push(movie);
    }
  });

  return filterdMovies;
};

const checkTags = (tags, word) => {
  let result = false;
  tags.forEach((tag) => {
    if (tag.toLowerCase().includes(word.toLowerCase())) {
      result = true;
    }
  });

  return result;
};
