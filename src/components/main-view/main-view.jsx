import React, { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {
          _id: 1,
          Title: "Inception",
          Description:
            "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster",
          ImagePath: "...",
        },
        {
          _id: 2,
          Title: "The Shawshank Redemption",
          Description: "desc2...",
          ImagePath: "...",
        },
        {
          _id: 3,
          Title: "Gladiator",
          Description: "ashdgbahkl",
          ImagePath: "...",
        },
      ],
      selectedMovie: null,
    };
  }

  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie,
    });
  }
  render() {
    const { movies, selectedMovie } = this.state;

    if (selectedMovie)
      return (
        <MovieView
          movie={selectedMovie}
          onBackClick={(newSelectedMovie) => {
            this.setSelectedMovie(newSelectedMovie);
          }}
        />
      );

    if (movies.length === 0)
      return <div className="main-view">The list is empty</div>;

    return (
      <div className="main-view">
        {movies.map((movie) => (
          <MovieCard
            key={movie._id}
            movie={movie}
            onMovieClick={(movie) => {
              this.setSelectedMovie(movie);
            }}
          />
        ))}
      </div>
    );
  }
}
