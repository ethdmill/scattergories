import React from 'react'

export default function Timer(props: {time: number}) {
  const minutesLeft = Math.floor(props.time / 60)
  const secondsLeft = props.time % 60
  const formattedSecondsLeft = secondsLeft < 10 ? `${0}${secondsLeft}` : secondsLeft
  return(
    // TODO: change this back to not be an H4 
    <div>
      <h4>{minutesLeft}:{formattedSecondsLeft}</h4>
    </div>
  )
}