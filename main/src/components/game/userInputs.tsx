import React from 'react'

function RenderSingleInput(props: {i: number, disabled: boolean}) {
  let label = (props.i < 9) ? `0${props.i + 1}` : `${props.i + 1}`
  return (
    <div>
      <label>{label}) </label>
      <input type="text" id={`input${label}`} disabled={props.disabled}></input>
    </div>
  )
}

export default function UserInputs(props: {disabled: boolean}) {
  return (
    <form>
      {Array.from({ length: 12 }, (_, i) => 
        <RenderSingleInput i={i} key={i} disabled={props.disabled} />
      )}
    </form>
  )
}