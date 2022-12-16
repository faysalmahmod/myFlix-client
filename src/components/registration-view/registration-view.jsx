import React, { useState } from 'react'
import axios from 'axios'
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
import { Link } from 'react-router-dom'
import './registration-view.scss'

export function RegistrationView (props) {
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [birthday, setBirthday] = useState('')
  // Declare hook for each input
  const  [values,setValues] = useState({
    usernameErr:'',
    passwordErr:'',
    nameErr:'',
    emailerr:''

  })
  //Validate Inputs from user

  const validate = () => {
    let isReq = true
    if(!name){
      setValues({...values,nameErr:'Name is Required'})
      isReq=false;
    }
    if (!username) {
      setValues({...values,usernameErr:'Username Required'})
      isReq = false
    } else if (username.length < 2) {
      setValues({...values,usernameErr:'Username must be longer tha 2 characters'})
      isReq = false
    }
    if (!password) {
      setValues({...values,passwordErr:'Password Required'})
      isReq = false
    } else if (password.length < 6) {
      setValues({...values,passwordErr:'Password must be greater than 6 digits'})
      isReq = false
    }
    if (!email) {
      setValues({...values,emailErr:'Email Required'})
      isReq = false
    } else if (email.indexOf('@'===-1)) {
      setValues({...values,emailErr:'Password must be greater than 6 digits'})
      isReq = false
    }
    return isReq
  }


  const handleSubmit = e => {
    e.preventDefault()
    const isReq = validate();
    if(isReq){
      axios.post('https://moviesapi1.herokuapp.com/users', {
        Name:name,
        Username: username,
        Password: password,
        Birthday:birthday,
        Email:email
      })
      .then(response => {
        const data = response.data
        alert('Registration successful,Please Login to proceed!!');
        window.open('/','_self');
      })
      .catch(err => {
        console.error(err);
        alert('Unable to register')
      })
  } else {
    console.log('Please Enter Details to register')
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
                  Please Register Here!!
                </Card.Title>
                <Form>
                <Form.Group>
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                      type='text'
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder='Enter Name'
                    />
                     {values.nameErr && <p>{values.nameErr}</p>}
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                      type='text'
                      value={username}
                      onChange={e => setUsername(e.target.value)}
                      placeholder='Enter Username'
                    />
                     {values.usernameErr && <p>{values.usernameErr}</p>}
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                      type='password'
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      placeholder='Enter Password'
                    />
                     {values.passwordErr && <p>{values.passwordErr}</p>}
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                      type='email'
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder='Enter Email'
                    />
                     {values.emailerr && <p>{values.emailerr}</p>}
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
  register : PropTypes.shape({
    Name:PropTypes.string.isRequired,
    Username:PropTypes.string.isRequired,
    Password:PropTypes.string.isRequired,
    Email:PropTypes.string.isRequired
  })
}
