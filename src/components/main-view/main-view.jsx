import React, { useState } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import { RegistrationView } from '../registration-view/registration1-view'
import { MovieCard } from '../movie-card/movie-card'
import { MovieView } from '../movie-view/movie-view'
import { ProfileView } from '../profile-view/profile-view'
import { LoginView } from '../login-view/login-view'
import { Container, Row, Col } from 'react-bootstrap'
import { DirectorView } from '../director-view/director-view'
import { Menubar } from '../navbar/navbar'
import { GenreView } from '../genre-view/genre-view'
import './main-view.scss'

export class MainView extends React.Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      user: null
    }
  }

  componentDidMount() {
    let accessToken = localStorage.getItem('token')
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem('user')
      })
      this.getMovies(accessToken)
    }
  }


  onLoggedIn(authData) {
    console.log(authData)
    this.setState({
      user: authData.user.Username
    })
    localStorage.setItem('token', authData.token)
    localStorage.setItem('user', authData.user.Username)
    this.getMovies(authData.token) //this.getMovies(authData) is called and gets the movies from your API once the user is logged in. 
  }

  onLoggedOut() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    this.setState({
      user: null
    })
  }

  getMovies(token) {
    axios
      .get('https://moviesapi1.herokuapp.com/movies/', {
        headers: { Authorization: `Bearer ${token}` } //passing bearer authorization in the header of our HTTP requests
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
  render() {
    const { movies, user } = this.state
    return (
      <>
        <Router>
          <Menubar user={user} />
          <Container>
            <Row className='main-view justify-content-md-center'>
              <Route
                exact
                path='/'
                render={() => {
                  if (!user)
                    return (
                      <Col>
                        <LoginView
                          movies={movies}
                          onLoggedIn={user => this.onLoggedIn(user)}
                        />
                      </Col>
                    )
                  if (movies.length === 0)
                    return <div className='main-view'></div>
                  return movies.map(m => (
                    <Col md={3} key={m._id}>
                      <MovieCard movie={m} />
                    </Col>
                  ))
                }}
              />
              <Route
                exact
                path={`/users/${user}`}
                render={({ match, history }) => {
                  if (!user) return <Redirect to='/' />
                  return (
                    <Col>
                      <ProfileView
                        movies={movies}
                        user={user}
                        onBackClick={() => history.goBack()}
                      />
                    </Col>
                  )
                }}
              />
              <Route
                path={'/user-update/${user}'}
                render={({ match, history }) => {
                  if (!user) return <Redirect to='/' />
                  return (
                    <Col>
                      <UserUpdate
                        user={user}
                        onBackClick={() => history.goBack()}
                      />
                    </Col>
                  )
                }}
              />

              <Route
                path='/register'
                render={() => {
                  if (user) return <Redirect to='/' />
                  return (
                    <Col lg={8} md={8}>
                      <RegistrationView onSubmitRegistration={(name, password, email) => {
                        registerUser(name, password, email)
                          .then(registered => {
                            if (registered) {
                              return <Redirect to='/' />
                            }
                            return <Redirect to='/register' />
                          })
                      }} />
                    </Col>
                  )
                }}
              />
              <Route
                exact
                path='/movies/:movieId'
                render={({ match, history }) => {
                  if (!user)
                    return (
                      <Col>
                        <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                      </Col>
                    )
                  if (movies.length === 0) return <div className='main-view' />
                  return (
                    <Col md={8}>
                      <MovieView
                        movie={movies.find(m => m._id === match.params.movieId)}
                        onBackClick={() => history.goBack()}
                      />
                    </Col>
                  )
                }}
              />

              <Route
                path='/genres/:name'
                render={({ match, history }) => {
                  if (!user)
                    return (
                      <Col>
                        <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                      </Col>
                    )
                  if (movies.length === 0) return <div className='main-view' />
                  return (
                    <Col md={8}>
                      <GenreView
                        genreMovies={movies.filter(
                          movie => movie.Genre.Name === match.params.name
                        )}
                        genre={movies.find(
                          m => m.Genre.Name === match.params.name
                        )}
                        onBackClick={() => history.goBack()}
                      />
                    </Col>
                  )
                }}
              />
              <Route
                path='/directors/:name'
                render={({ match, history }) => {
                  if (!user)
                    return (
                      <Col>
                        <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                      </Col>
                    )
                  if (movies.length === 0) return <div className='main-view' />
                  return (
                    <Col md={8}>
                      <DirectorView
                        director={movies.find(
                          m => m.Director.Name === match.params.name
                        )}
                        directorMovies={movies.filter(
                          (movie) => movie.Director.Name === match.params.name
                        )}
                        onBackClick={() => history.goBack()}
                      />
                    </Col>
                  )
                }}
              />
            </Row>
          </Container>
        </Router>
      </>
    )
  }
}

export default MainView
