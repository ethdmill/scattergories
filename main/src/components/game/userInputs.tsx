import React from 'react'

//TODO: render checkboxes to the right of each input field, set state that determines points, clear with a new round

function RenderSingleInput(props: {i: number, disabled: boolean}) {
  let label = (props.i < 9) ? `0${props.i + 1}` : `${props.i + 1}`
  return (
    <div>
      <label>{label}) </label>
      <input type="text" id={`input${label}`} disabled={props.disabled}></input>
      <input type="checkbox"></input>
      <input type="checkbox"></input>
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