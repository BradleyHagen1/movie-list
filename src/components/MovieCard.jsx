import React from "react";

const MovieCard = ({movie, list, addMovie, removeMovie}) => {
  const inWatchlist = list.filter((mov) => {
    return mov.id === movie.id;
  });


    const button = inWatchlist.length === 0 ? (
        <button onClick={() => addMovie(movie)}>Add to List</button>
    ) : (
        <button onClick={() => removeMovie(movie)}>Remove</button>
    );

  return (
    <div className="movie-card">
      <div>
        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="movie posters" />
        <h3>{movie.original_title}</h3>
      </div>
      {button}
    </div>
  );
};

export default MovieCard;
