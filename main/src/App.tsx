import React from 'react'
import './App.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Game from './components/game'
import Rules from './components/rules'

function Home() {
  return(
    <div className="text-center">
      <h1 className="py-4">Welcome to Scattergories!</h1>
      <h4>Please select an option above.</h4>
    </div>
  )
}

//TODO: fix navbar
export default function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/game">Play</Nav.Link>
          <Nav.Link href="/rules">Rules</Nav.Link>
        </Nav>
      </Navbar>
      <Router>
        <Route path='/' exact component={Home} />
        <Route path='/game' exact component={Game} />
        <Route path='/rules' exact component={Rules} />
      </Router>
    </>
  )
}
