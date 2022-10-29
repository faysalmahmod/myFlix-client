import React, { useState } from 'react'
import axios from 'axios'
import { RegistrationView } from '../registration-view/registration-view'
import { MovieCard } from '../movie-card/movie-card'
import { MovieView } from '../movie-view/movie-view'
import { LoginView } from '../login-view/login-view'
import { Row, Col } from 'react-bootstrap'

export class MainView extends React.Component {
  constructor () {
    super()
    this.state = {
      movies: [],
      selectedMovie: null
    }
  }

  componentDidMount () {
    let accessToken = localStorage.getItem("token");
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem("user"),
      });
      this.getMovies(accessToken);
    }
  }

  setSelectedMovie (newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie
    })
  }

  onLoggedIn (authData) {
    console.log(authData)
    this.setState({
      user: authData.user.Username
    })
    localStorage.setItem('token', authData.token)
    localStorage.setItem('user', authData.user.Username)
    this.getMovies(authData.token)
  }

  onLoggedOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.setState({
      user: null,
    });
  }

  getMovies (token) {
    axios
      .get('https://api-movie-myflix.herokuapp.com/movies', {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(response => {
        // Assign the result to the state
        this.setState({
          movies: response.data
        })
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  render () {
    const { movies, selectedMovie, user } = this.state

    if (!this.state.user)
      return <LoginView onLoggedIn={user => this.onLoggedIn(this.state.user)} />

    if (selectedMovie)
      return (
        <Row className='justify-content-md-center'>
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

    if (movies.length === 0) return <div className='main-view'></div>

    return (
      <Row className='main-view justify-content-md-center'>
        {movies.map(movie => (
          <Col md={3}>
            <MovieCard
              key={movie._id}
              movie={movie}
              onMovieClick={movie => {
                this.setSelectedMovie(movie)
              }}
            />
          </Col>
        ))}
      </Row>
    )
  }
}
