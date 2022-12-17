import React from "react";
import { Button, Container, Col, Row } from "react-bootstrap";
import { MovieCard } from "../movie-card/movie-card";
import './genre-view.scss'
export class GenreView extends React.Component {
  render() {
    const { genre, onBackClick, genreMovies } = this.props;

    return (
      <div>
        <Container className='genre-view'>
          <Row>
            <Col className='label'>Genre: </Col>
            <Col className='value genre-name'>{genre.Genre.Name}</Col>
          </Row>
          <Row>
            <Col className='label'>Description: </Col>
            <Col className='value'>{genre.Genre.Description}</Col>
          </Row>
          <Row>
            <Col className='label genre-name'>Other {genre.Genre.Name} films: </Col>
            <Col className='value card-name'>
              {genreMovies.map((movie) => (
                <MovieCard key={movie._id} movie={movie}>
                  {movie.Title}
                </MovieCard>
              ))}
            </Col>
          </Row>

          <Button
            className='mt-4'
            onClick={() => {
              onBackClick();
            }}
          >
            Back
          </Button>
        </Container>
      </div>
    );
  }
}