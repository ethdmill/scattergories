import React from 'react'

function RenderSingleInput(props: {i: number}) {
  let label = (props.i < 9) ? `0${props.i + 1}` : `${props.i + 1}`
  return (
    <div>
      <label>{label}) </label>
      <input type="text" id={`input${label}`}></input>
    </div>
  )
}

function RenderAllInputs() {
  let inputs = Array.from({ length: 12 }, (_, i) => 
    <RenderSingleInput i={i} key={i} />
  )
  return inputs
}

export default function UserInputs () {
  return (
    <form>
      {RenderAllInputs()}
    </form>
  )
}