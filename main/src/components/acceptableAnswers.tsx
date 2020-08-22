import React from 'react'

export default function AcceptableAnswers() {
  return(
    <div className="text-center">
      <h2 className="pt-5 my-5">Rules for Acceptable Answers</h2>
      <ul className="list-group">
        <li className="my-1">Answers must fit their respective category.</li>
        <li className="my-1">The first word of your answer must begin with the key letter.</li>
        <li className="my-1">The articles "A", "An", and "The" do not count.</li>
        <li className="my-1">The same answer cannot be given more than once in the same round.</li>
        <li className="my-1">If two or more players give the same answer for the same category, their answers cancel each other out.</li>
        <li className="my-1">When answering with a proper name, you may use the first or last name, as long as it starts with the key letter.</li>
        <li className="my-1">Creative answers can be acceptable, but generally, just using an adjective is not.</li>
        <li className="my-1">Answers can (and likely will) be contested, and are ultimately decided on by a majority vote.</li>
      </ul>
    </div>
  )
}