import React from 'react'

interface SubmittedAnswer {
  input: string,
  correct: boolean
}

// const SingleInput = (props: {submittedAnswer: SubmittedAnswer, i: number, disabled: boolean, onChange: void}) => {
const SingleInput = (props: {submittedAnswer: SubmittedAnswer, i: number, disabled: boolean}) => {
  let label = (props.i < 9) ? `0${props.i + 1}` : `${props.i + 1}`
  return (
    <div>
      <label className="ml-1 mr-2">{label}) </label>
      <input type="text" id={`input${label}`} disabled={props.disabled}></input>
      <input type="checkbox" className="ml-2 mr-1" id="goodAnswer"></input>
    </div>
  )
}

export default function UserInputs(props: {disabled: boolean}) {
  const [answers, setAnswers] = React.useState<SubmittedAnswer[]>(Array.from({ length: 12 }))

  // React.useEffect(() => {
  //   setAnswers([])
  // })

  const handleCheck = (index: number) => {
    let answer = answers[index]
    answer.correct = !answer.correct
    answers[index] = answer
    setAnswers(answers)
  }

  return (
    <form>
      {answers.map((value, index) => {
        // return <SingleInput submittedAnswer={value} i={index} key={index} disabled={props.disabled} onChange={handleCheck(index)} />
        return <SingleInput submittedAnswer={value} i={index} key={index} disabled={props.disabled} />
      })}
    </form>
  )
}