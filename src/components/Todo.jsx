import React from 'react'
import { ACTIONS } from '../actions'

function Todo({ todo, dispatch }) {
  return (
     <div className='my-4 mx-auto w-full max-w-md'>
         <div className={`${todo.complete ? "line-through" : ""} text-2xl font-bold mx-4 my-2`} style={{ color: todo.complete ? "green" : "red" }}>{todo.name}</div>
         <button
          className="bg-blue-500 mx-4 my-2 text-white p-2 rounded-md cursor-pointer"
          onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })}
          >Toggle</button>
         <button className="bg-red-500 mx-4 my-2 text-white p-2 rounded-md cursor-pointer"
          onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })}
          >Delete</button>
     </div>
  )
}

export default Todo