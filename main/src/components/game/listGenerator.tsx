import React from 'react'
import socketio, { Socket } from 'socket.io-client'
import Timer from './timer'
import UserInputs from './userInputs'

export default function ListGenerator () {
  const [list, setList] = React.useState<string[]>()
  const [connection, setConnection] = React.useState<typeof Socket>()
  const [timeRemaining, setTimeRemaining] = React.useState<number>(180)
  const [disabled, setDisabled] = React.useState<boolean>(false)

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

  React.useEffect(() => {
    if (timeRemaining == 0) {
      setDisabled(true)
    }
  }, [timeRemaining])

  const countdownTimer = () => {
    setInterval(() => {
      setTimeRemaining(previousTimeRemaining => previousTimeRemaining - 1)
    }, 1000)
  }

  const handleClick = () => {
    connection?.emit('generate_list')
    setTimeRemaining(3)
    countdownTimer()
  }

  return (
    <div>
      <div className="listWrapper">
        {list?.map((listItem, index) => <div key={index.toString()}>{listItem}</div>)}
      </div>
      <div className="userInputWrapper">
        <button onClick={() => handleClick()}>Start the game!</button>
      </div>
      <div>
        <Timer time={timeRemaining} />
      </div>
      <div>
        <UserInputs disabled={disabled} />
      </div>
    </div>
  )
}