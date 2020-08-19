import React from 'react'

export default function Rules() {
  return (
    <div className="text-center">
      <h2 className="pt-5 my-5">DA RULES</h2>
      <ul className="list-group">
        <li className="my-1">A word will be selected at random.</li>
        <li className="my-1">You will have a set number of attempts to guess the word.</li>
        <li className="my-1">The word will be displayed, hidden by a corresponding amount of dashes.</li>
        <li className="my-1">You can guess one letter at a time, or the whole word at once.</li>
        <li className="my-1">If you guess a letter correctly, you don't lose any attempts.</li>
        <li className="my-1">However, if you guess wrong, you lose an attempt!</li>
        <li className="my-1">Be careful! If you run out of guesses, it's game over!</li>
      </ul>
    </div>
  )
}