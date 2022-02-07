import React from "react";
import MovieCard from "./MovieCard";

const Catalog = ({ movies }) => {
  return (
    <>
      <h3 className="mb-3">Polecane Gry</h3>
      <div className="catalog">
        {movies.map((m, idx) => (
          <MovieCard key={idx} movie={m} />
        ))}
      </div>
    </>
  );
};

export default Catalog;

// title
// director
// description
// actors
// imageurl
