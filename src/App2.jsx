import React, { useReducer, useState } from "react";
import Todo from "./components/Todo";
import { ACTIONS } from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...state, newTodo(action.payload.name, false)];
    case ACTIONS.TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, complete: !todo.complete }
          : todo,
      );
    case ACTIONS.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
};

const newTodo = (name, complete = false) => {
  return { id: Date.now().toString(), name: name, complete: complete };
};

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "") return;
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
    // console.log(todos);
  };

  return (
    <>
      <div className="flex justify-center items-center my-4 mx-auto w-full max-w-md">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded-md p-2"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md cursor-pointer"
          >
            Add
          </button>
        </form>
      </div>
      <h1 className="text-2xl font-bold text-center my-4">Todo List</h1>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </>
  );
}

export default App;
