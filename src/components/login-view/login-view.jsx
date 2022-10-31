import React, { useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Card,
  CardGroup
} from 'react-bootstrap'

export function LoginView (props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  // Declare hook for each input
  const [usernameErr, setUsernameErr] = useState('')
  const [passwordErr, setPasswordErr] = useState('')
  //Validate Inputs from user
  const validate = () => {
    let isReq = true
    if (!username) {
      setUsernameErr('Username Required')
      isReq = false
    } else if (username.length < 2) {
      setUsernameErr('Username must be longer tha 2 characters')
      isReq = false
    }
    if (!password) {
      setPasswordErr('Password Required')
      isReq = false
    } else if (password.length < 6) {
      setPasswordErr('Password must be greater than 6 digits')
      isReq = false
    }
    return isReq
  }
  const handleSubmit = e => {
    e.preventDefault()
    const isReq = validate();
    if(isReq){
    axios
      .post("https://myflixbackend.herokuapp.com/login", {
        Username: username,
        Password: password
      })
      .then(response => {
        const data = response.data
        props.onLoggedIn(data)
      })
      .catch(error => {
        console.log('No such User exists')
      })
  }
}

  return (
    <Container>
      <Row>
        <Col>
          <CardGroup>
            <Card style={{ marginTop: 100, marginBottom: 50, width: '30' }}>
              <Card.Body>
                <Card.Title style={{ textAlign: 'center', fontSize: '2r' }}>
                  Please Login
                </Card.Title>
                <Form>
                  <Form.Group controlId='formUsername'>
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                      type='text'
                      onChange={e => setUsername(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId='formPassword'>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                      type='password'
                      onChange={e => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  <Button
                    style={{
                      textAlign: 'center',
                      fontSize: '5r',
                      padding: 9,
                      margin: 4
                    }}
                    variant='primary'
                    type='submit'
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                  <Button
                    style={{
                      textAlign: 'center',
                      fontSize: '5r',
                      padding: 9,
                      margin: 4
                    }}
                    variant='secondary'
                    type='button'
                  >
                    Register
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>
  )
}

LoginView.propTypes = {
  onLoggedIn: PropTypes.func.isRequired
}
