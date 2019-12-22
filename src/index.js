import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import counterReducer from './reducer'

const store = createStore(counterReducer)

const App = () => {
  const good = () => {
    store.dispatch({
      type: 'good'
    })
  }

  const neutral = () => {
    store.dispatch({
      type: 'ok'
    })
  }

  const bad = () => {
    store.dispatch({
      type: 'bad'
    })
  }

  return (
    <div>
      <button onClick={good}>good</button>
      <button onClick={neutral}>ok</button>
      <button onClick={bad}>bad</button>
      <button>reset stats</button>
      <div>good {store.getState().good}</div>
      <div>ok {store.getState().ok}</div>
      <div>bad {store.getState().bad}</div>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)