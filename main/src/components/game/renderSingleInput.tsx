import React from 'react'

export default function RenderSingleInput(props: {i: number, disabled: boolean}) {
  let label = (props.i < 9) ? `0${props.i + 1}` : `${props.i + 1}`
  return (
    <div>
      <label>{label}) </label>
      <input type="text" id={`input${label}`} disabled={props.disabled}></input>
    </div>
  )
}