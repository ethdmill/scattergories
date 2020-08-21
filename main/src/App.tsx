import React from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
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

export default function App() {
  return (
    <>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4 justify-content-center">
          <li className="nav-link"><Link to='/'>Home</Link></li>
          <li className="nav-link"><Link to='/game'>Play</Link></li>
          <li className="nav-link"><Link to='/rules'>Rules</Link></li>
        </nav>
        <Route path='/' exact component={Home} />
        <Route path='/game' exact component={Game} />
        <Route path='/rules' exact component={Rules} />
      </Router>
    </>
  )
}
