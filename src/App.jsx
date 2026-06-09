import React, { useReducer } from 'react'

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return {count: state.count + 1}
    case ACTIONS.DECREMENT:
      return {count: state.count - 1}
    default:
      return state
  }
}

const initialState = {
  count: 0,
}

function App() { 
  const [state, dispatch] = useReducer(reducer, initialState); 

  const increment = () => {
    dispatch({type: 'increment'});
  }

  const decrement = () => {
    dispatch({type: 'decrement'});
  }

  return (
    <div>
      <h1
        className='text-2xl font-bold'
      >Count: {state.count}</h1>
      <button
       onClick={increment}
       className='bg-blue-500 text-white p-2 mx-4 rounded-md'
       >Increment</button>
      <button
       onClick={decrement}
       className='bg-red-500 text-white p-2 mx-4 rounded-md'
       >Decrement</button>
    </div>
  )
}

export default App
