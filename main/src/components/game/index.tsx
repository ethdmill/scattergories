import React, { useState } from 'react'
import Game from './game'
import AcceptableAnswers from '../rules/acceptableAnswers'

export default function Scattergories() {

  // sets state to show/hide acceptable answer rules
  const [showAcceptableAnswers, setShowAcceptableAnswers] = useState<boolean>(false)

  return(
    <>
      <Game />
      <div>
        <button onClick={() => setShowAcceptableAnswers(!showAcceptableAnswers)}>Need help?</button>
        {showAcceptableAnswers && <AcceptableAnswers />}
      </div>
    </>
  )
}