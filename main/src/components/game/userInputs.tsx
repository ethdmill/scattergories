import React from 'react'
import { SubmittedAnswer } from './game'

// render for a single input field
const SingleInput = (props: {submittedAnswer: SubmittedAnswer, index: number, disabled: boolean, onChange: (index: number) => void, handleText: (input: string, index: number) => void}) => {
  let label = (props.index < 9) ? `0${props.index + 1}` : `${props.index + 1}`

  // targets user input for each input field and stores it in state
  const onTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.handleText(event.target.value, props.index)
  }

  return (
    <div>
      <label>{label})</label>
      <input className="mx-1 my-1" type="text" value={props.submittedAnswer.userInput} id={`input${label}`} disabled={props.disabled} onChange={onTextChange}></input>
      <input type="checkbox" checked={props.submittedAnswer.correct} onChange={() => props.onChange(props.index)}></input>
    </div>
  )
}

// render for all 12 inputs
export default function UserInputs(props: {disabled: boolean, answers: SubmittedAnswer[], handleCheck: (index: number) => void, handleText: (input: string, index: number) => void}) {
  return (
    <div>
      <div className="d-flex flew-row justify-content-center">
        <form>
          {props.answers.map((value, index) => {
            return <SingleInput submittedAnswer={value} index={index} key={index} disabled={props.disabled} onChange={(index) => props.handleCheck(index)} handleText={props.handleText} />
          })}
        </form>
      </div>
      <div className="d-flex justify-content-center">
      </div>
    </div>
  )
}