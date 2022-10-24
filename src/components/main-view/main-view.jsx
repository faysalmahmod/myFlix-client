<<<<<<< Updated upstream
import React, { useState } from "react";
import axios from "axios";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
=======
import React, { useState } from 'react'
import axios from 'axios'
import { RegistrationView } from '../registration-view/registration-view'
import { MovieCard } from '../movie-card/movie-card'
import { MovieView } from '../movie-view/movie-view'
import { LoginView } from '../login-view/login-view'
import Row from 'react-bootstrap/Row'
>>>>>>> Stashed changes

export class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: null,
    };
  }

  componentDidMount() {
    axios
      .get("http://api-movie-myflix.herokuapp.com/movies")
      .then((response) => {
        this.setState({ movies: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
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
<<<<<<< Updated upstream
        <MovieView
          movie={selectedMovie}
          onBackClick={(newSelectedMovie) => {
            this.setSelectedMovie(newSelectedMovie);
          }}
        />
      );
=======
        <Row className="justify-content-md-center">
          <Col md={8}>
            <MovieView
              movie={selectedMovie}
              onBackClick={newSelectedMovie => {
                this.setSelectedMovie(newSelectedMovie)
              }}
            />
          </Col>
        </Row>
      )
>>>>>>> Stashed changes

    if (movies.length === 0)
      return <div className="main-view"></div>;

    return (
<<<<<<< Updated upstream
      <div className="main-view">
        {movies.map((movie) => (
=======
      
        <Row className="main-view justify-content-md-center">
        {movies.map(movie => (
          <Col md={3}>
>>>>>>> Stashed changes
          <MovieCard
            key={movie._id}
            movie={movie}
            onMovieClick={(movie) => {
              this.setSelectedMovie(movie);
            }}
          />
          </Col>
        ))}
<<<<<<< Updated upstream
      </div>
    );
=======
        </Row>

    )
>>>>>>> Stashed changes
  }
}
