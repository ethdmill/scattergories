import React, { useState } from 'react'
import StartGame from './startGame'
import AcceptableAnswers from '../acceptableAnswers'

export default function Game() {
  const [showAcceptableAnswers, setShowAcceptableAnswers] = useState<boolean>(true)

  return(
    <>
      <StartGame />
      <div>
        <button onClick={() => setShowAcceptableAnswers(!showAcceptableAnswers)}>Acceptable Answers</button>
        {showAcceptableAnswers && <AcceptableAnswers />}
      </div>
    </>
  )
}