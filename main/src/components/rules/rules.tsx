import React from 'react'
import AcceptableAnswers from './acceptableAnswers'

export default function Rules() {
  return (
    <>
      <div className="text-center">
        <h2 className="pt-5 my-5">How to Play</h2>
        <ul className="list-group">
          <li className="my-1">The game is played in three (3) rounds.</li>
          <li className="my-1">One (1) round is played as follows:</li>
          <li className="my-1">Each player will have three (3) minutes to fill in their form fields with answers.</li>
          <li className="my-1">Pressing the "Generate a list!" button will generate a list of categories.</li>
          <li className="my-1">Pressing the "Start the game!" button will select a random key letter and start the timer.</li>
          <li className="my-1">Once the timer has expired, the round is over.</li>
          <li className="my-1">Players reveal their answers in turn and compare them to other players' answers.</li>
          <li className="my-1">One point is awarded per acceptable answer. Points are tallied at the end of the round.</li>
        </ul>
      </div>
      <AcceptableAnswers />
    </>
  )
}