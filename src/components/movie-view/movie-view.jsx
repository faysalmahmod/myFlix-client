import React from 'react'
import { Button, Card,CardGroup, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'

import './movie-view.scss'
export class MovieView extends React.Component {
  addMovieToFavorites (e) {
    const { movie } = this.props
    const username = localStorage.getItem('user')
    const token = localStorage.getItem('token')

    e.preventDefault()
    axios
      .post(
        `https://moviesapi1.herokuapp.com/users/${username}/favourite/${movie._id}`,
        { username: localStorage.getItem('user') },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      )
      .then(response => {
        console.log(response)
        alert('movie added')
      })
      .catch(error => console.error(error))
  }

  render () {
    const { movie, onBackClick } = this.props
    return (

<Card bg="dark" text="light">
        <Card.Header className="text-center" as="h5">
          {movie.Title}
          <Button
            className="button-movie-view-add-favorite"
            variant="outline-warning"
            size="sm"
            type="button"
            onClick={(e) => this.addMovieToFavorites(e)}
          >
            Add to favorites
          </Button>
        </Card.Header>
        <Card.Body>
          <CardGroup>
            <Card bg="dark" border="dark" text="light">
              <Card.Body className="movie-textarea">
                <div className="movie-genre-link">
                  <span className="label">Genre: </span>
                  <Link to={`/genres/${movie.Genre.Name}`}>
                    <Button variant="link">{movie.Genre.Name}</Button>
                  </Link>
                  <div className="movie-director-link">
                    <span className="label">Director: </span>
                    <Link to={`/directors/${movie.Director.Name}`}>
                      <Button variant="link">{movie.Director.Name}</Button>
                    </Link>
                  </div>
                </div>
                <span className="movie-description">{movie.Description}</span>
              </Card.Body>
            </Card>
            <Card bg="dark" border="dark" text="light">
              <Card.Img
                className="movie-poster"
                as="img"
                crossOrigin="anonymous | use-credentials"
                src={movie.ImageURL}
              />
            </Card>
          </CardGroup>
        </Card.Body>
        <Card.Footer className="text-right">
          <Button
            className="button-movie-view"
            variant="secondary"
            onClick={() => {
              onBackClick();
            }}
          >
            Back
          </Button>
        </Card.Footer>
      </Card>
      
      //  <Row>
      //   <Col className='testCol' lg={6}>
      //     <img src={movie.ImageURL} crossOrigin='anonymous'/>
      //   </Col>
      //   <Col className='testCol' lg={6}>
      //     <h2>{movie.Title}</h2>
      //     <h6>
      //       Director:
      //       <Link to={`/directors/${movie.Director.Name}`}>
      //         <Button variant='link'>{movie.Director.Name}</Button>
      //       </Link>
      //     </h6>
      //     <h6>
      //       Genre:
      //       <Link to={`/genres/${movie.Genre.Name}`}>
      //         <Button variant='link'>{movie.Genre.Name}</Button>
      //       </Link>
      //     </h6>

      //     <p>{movie.Description}</p>
      //     <Button
      //       variant='success'
      //       onClick={(e) => this.addMovieToFavorites(e)}
      //     >
      //       Add to favorites
      //     </Button>
      //     <div className='buttonTest'>
      //       <Button
      //         className='mt-4'
      //         onClick={() => {
      //           onBackClick();
      //         }}
      //       >
      //         Back
      //       </Button>
      //     </div>
      //   </Col>
      // </Row>
    )
  }
}
