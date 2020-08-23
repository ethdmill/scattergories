import React from 'react'
import './App.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Game from './components/game'
import Rules from './components/rules/rules'

function Home() {
  return(
    <div>
      <div className="text-center">
        <h1 className="py-4">Welcome to Scattergories!</h1>
        <h4>Please select an option above.</h4>   
      </div>
      <div className="ml-1 fixed-bottom">
        <div>I do not own Scattergories or any related properties.</div>
        <div>All rights go to their respective owners.</div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Nav className="m-auto">
          <Nav.Link href="/" className="mx-3">Home</Nav.Link>
          <Nav.Link href="/game" className="mx-3">Play</Nav.Link>
          <Nav.Link href="/rules" className="mx-3">Rules</Nav.Link>
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
