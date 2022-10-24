<<<<<<< Updated upstream
=======
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Card,
  CardGroup
} from 'react-bootstrap'

export function RegistrationView (props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [birthday, setBirthday] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    console.log(username, password, email, birthday)
    props.Registration(username)
  }

  return (
    <Container>
      <Row>
        <Col>
          <CardGroup>
            <Card style={{ marginTop: 100, marginBottom: 50, width: '30' }}>
              <Card.Body>
                <Card.Title style={{ textAlign: 'center', fontSize: '2r' }}>
                  Please Register Here!!
                </Card.Title>
                <Form>
                  <Form.Group>
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                      type='text'
                      value={username}
                      onChange={e => setUsername(e.target.value)}
                      placeholder='Enter email'
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                      type='password'
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      placeholder='Enter Password'
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                      type='email'
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder='Enter Email'
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Birthday:</Form.Label>
                    <Form.Control
                      type='birthday'
                      value={birthday}
                      onChange={e => setBirthday(e.target.value)}
                      placeholder='Enter Birthday'
                    />
                  </Form.Group>

                  <Button
                    style={{
                      textAlign: 'center',
                      fontSize: '5r',
                      padding: 9,
                      margin: 4
                    }}
                    type='submit'
                    onClick={handleSubmit}
                  >
                    Register
                  </Button>
                  <Button
                    style={{
                      textAlign: 'center',
                      fontSize: '5r',
                      padding: 9,
                      margin: 4
                    }}
                    type='button'
                    onClick={() => {
                      props.onBackClick(null)
                    }}
                  >
                    Return to Login Page
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

RegistrationView.propTypes = {
  onRegistration: PropTypes.func.isRequired
}
>>>>>>> Stashed changes
