import React, { FunctionComponent, MouseEvent } from 'react'
import { AppProps } from './types'

function App<FunctionComponent>(props: AppProps) {
  const deleteTodo = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(e.target)
  }
  return (
    <div>
      {props.todos.map(t =>
        <div key={t.text}>
          <li>{t.text}</li>
          <button onClick={deleteTodo}>Delete Todo</button>
        </div>
      )}
    </div>
  );
}

export default App;