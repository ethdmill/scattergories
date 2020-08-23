import React from 'react'
import AnswerCheckboxes from './answerCheckboxes'

const SingleInput = (props: {i: number, disabled: boolean}) => {
  let label = (props.i < 9) ? `0${props.i + 1}` : `${props.i + 1}`
  return (
    <div>
      <label className="ml-1 mr-2">{label}) </label>
      <input type="text" id={`input${label}`} disabled={props.disabled}></input>
      <AnswerCheckboxes />
    </div>
  )
}

export default function UserInputs(props: {disabled: boolean}) {
  return (
    <form>
      {Array.from({ length: 12 }, (_, i) => 
        <SingleInput i={i} key={i} disabled={props.disabled} />
      )}
    </form>
  )
}