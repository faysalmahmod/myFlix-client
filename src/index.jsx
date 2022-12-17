import React, { useState } from 'react'
import * as ReactDOMClient from 'react-dom/client';
import {Provider} from "react-redux";
import ReactDOM from 'react-dom'
import { MainView } from './components/main-view/main-view'
import {store} from "./store/store";
import Container from 'react-bootstrap/Container';
import Footer from "./components/footer/footer";
// Import statement to indicate that you need to bundle `./index.scss`
import './index.scss'

// Main component (will eventually use all the others)
class MyFlixApplication extends React.Component {
  render () {
    return (
      <Provider store={store}>
      <Container className="flex-wrapper app p-0" fluid>
          <MainView/>
          <Footer className="footer"/>
      </Container>
  </Provider>
    )
  }
}

// Finds the root of your app
const container = document.getElementsByClassName('app-container')[0]

// Tells React to render your app in the root DOM element
ReactDOM.render(React.createElement(MyFlixApplication), container)
