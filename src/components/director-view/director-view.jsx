import React from "react";
import { Button, Container, Col, Row } from "react-bootstrap";
import { MovieCard } from "../movie-card/movie-card";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import "./director-view.scss"
import CenteredLayout from "../centered-layout/centered-layout";


export class DirectorView extends React.Component {
  render() {
    const { director, onBackClick, directorMovies } = this.props;

    return (
      <div>
        <Container className='director-view'>
          <Row>
            <Col className='label'>Director: </Col>
            <Col className='value director-name'>{director.Director.Name}</Col>
          </Row>
          <Row>
            <Col className='label'>Bio: </Col>
            <Col className='value'>{director.Director.Bio}</Col>
          </Row>
            <Col className='label director-name'>{director.Director.Name} movies: </Col>
            <Col className='value card-name'>
              {directorMovies.map((movie) => (
                <MovieCard key={movie._id} movie={movie} >
                  {movie.Title}
                </MovieCard>
              ))}
            </Col>

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