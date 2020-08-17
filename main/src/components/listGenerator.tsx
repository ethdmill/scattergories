import React from 'react'
import socketio, { Socket } from 'socket.io-client';

export default function ListGenerator () {
  const [list, setList] = React.useState<string[]>();
  const [connection, setConnection] = React.useState<typeof Socket>();

  React.useEffect(
    () => {
      const connection = socketio('/lobby');
      setConnection(connection);

      connection.on('list_generated', (list: string[]) => {
        setList(list);
      });
    },
    []
  );

  const handleClick = () => {
    connection?.emit('generate_list');
  };

  return (
    <div>
      <div>
        {list?.map((listItem, index) => <div key={index.toString()}>{listItem}</div>)}
      </div>
      <div>
        <button onClick={() => handleClick()}>Generate a list!</button>
      </div>
    </div>
  )
}