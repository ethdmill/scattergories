import React from 'react'
import socketio, { Socket } from 'socket.io-client'
import Timer from './timer'
import UserInputs from './userInputs'

export default function ListGenerator () {
  const [list, setList] = React.useState<string[]>()
  const [connection, setConnection] = React.useState<typeof Socket>()
  const [timeRemaining, setTimeRemaining] = React.useState<number>(180)
  const [disableInputs, setDisableInputs] = React.useState<boolean>(true)
  const [disableStartButton, setDisableStartButton] = React.useState<boolean>(false)

  // initializes lobby and connects to list source file
  React.useEffect(
    () => {
      const connection = socketio('/lobby')
      setConnection(connection)

      connection.on('list_generated', (list: string[]) => {
        setList(list)
      })

      connection.on('timer_ended', () => {})
    },
    []
  )

  // disables user inputs when timer reaches 0
  React.useEffect(() => {
    if (timeRemaining == 0) {
      setDisableInputs(true)
    }
  }, [timeRemaining])

  // starts and stops timer
  const countdownTimer = (limit: number) => {
    let i = 0;
    let timer = setInterval(() => {
      setTimeRemaining(prevTime => prevTime - 1)
      if (i === limit - 1) {
        clearInterval(timer)
        setTimeRemaining(180)
        setDisableStartButton(false)
      }
      i++
    }, 1000)
  }

  // calls the following functions on button click
  const handleClick = () => {
    connection?.emit('generate_list')
    setTimeout(() => {
      setTimeRemaining(3)
      countdownTimer(3)
      setDisableInputs(false)
      setDisableStartButton(true)
    }, 0)
  }

  return (
    <div>
      <div className="listWrapper">
        {list?.map((listItem, index) => <div key={index.toString()}>{listItem}</div>)}
      </div>
      <div className="userInputWrapper">
        <button id="startButton" onClick={() => handleClick()} disabled={disableStartButton}>Start the game!</button>
      </div>
      <div>
        <Timer time={timeRemaining} />
      </div>
      <div>
        <UserInputs disabled={disableInputs} />
      </div>
    </div>
  )
}