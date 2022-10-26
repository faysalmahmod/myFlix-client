import React, { useState } from 'react'
import axios from 'axios'
import { RegistrationView } from '../registration-view/registration-view'
import { MovieCard } from '../movie-card/movie-card'
import { MovieView } from '../movie-view/movie-view'
import { LoginView } from '../login-view/login-view'
import {Row,Col} from 'react-bootstrap'

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

  // onLoggedIn (user) {
  //   this.setState({ user })
  // }

  render() {
    const { movies, selectedMovie, user } = this.state

    // if (!this.state.user)
    // return <LoginView onLoggedIn={user => this.onLoggedIn(this.state.user)} />
  
    if (selectedMovie)
      return (
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

    if (movies.length === 0)
      return <div className="main-view"></div>;

    return (
      
        <Row className="main-view justify-content-md-center">
        {movies.map(movie => (
          <Col md={3}>
          <MovieCard
            key={movie._id}
            movie={movie}
            onMovieClick={(movie) => {
              this.setSelectedMovie(movie);
            }}
          />
          </Col>
        ))}
        </Row>

    )
  }
}




