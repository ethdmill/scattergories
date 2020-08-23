import React, { useState } from 'react'
import StartGame from './startGame'
import AcceptableAnswers from '../rules/acceptableAnswers'

export default function Game() {
  const [showAcceptableAnswers, setShowAcceptableAnswers] = useState<boolean>(false)

  return(
    <>
      <StartGame />
      <div>
        <button onClick={() => setShowAcceptableAnswers(!showAcceptableAnswers)}>Need help?</button>
        {showAcceptableAnswers && <AcceptableAnswers />}
      </div>
    </>
  )
}