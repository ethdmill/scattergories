import React, { useState } from 'react'
import ListGenerator from './listGenerator'
import AcceptableAnswers from '../acceptableAnswers'

export default function Game() {
  const [showAcceptableAnswers, setShowAcceptableAnswers] = useState<boolean>(true)

  return(
    <>
      <ListGenerator />
      <div>
        <button onClick={() => setShowAcceptableAnswers(!showAcceptableAnswers)}>Acceptable Answers</button>
        {showAcceptableAnswers && <AcceptableAnswers />}
      </div>
    </>
  )
}