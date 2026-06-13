# React `useReducer` Hook

The `useReducer` hook is a React Hook used for managing complex state logic in functional components. It serves as an alternative to `useState`, especially when the next state depends on the previous one or when multiple state values change together.

## Why useReducer?

* **Complex State**: Manages state objects with multiple sub-values.
* **Predictable Transitions**: Centralizes state update logic into a single function.
* **Optimized Performance**: Passes `dispatch` down instead of individual callbacks.

---

## Core Concepts

### 1. Reducer Function
A pure function that takes the current state and an action, then returns a new state.
```javascript
function reducer(state, action) {
  // Returns new state
}
```

### 2. Action
An object that describes what happened. It typically has a `type` property and an optional `payload`.
```javascript
{ type: 'INCREMENT', payload: 1 }
```

### 3. Dispatch Function
A function provided by the hook to send actions to the reducer.
```javascript
dispatch({ type: 'INCREMENT' });
```

---

## Basic Usage

Here is a simple counter example implementing `useReducer`.

```jsx
import React, { useReducer } from 'react';

// 1. Define initial state
const initialState = { count: 0 };

// 2. Define reducer function
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function Counter() {
  // 3. Initialize hook
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}

export default Counter;
```

---

## Advanced Usage: Lazy Initialization

You can create the initial state lazily if it requires heavy computation. Pass an `init` function as the third argument.

```jsx
function init(initialCount) {
  return { count: initialCount };
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    default:
      return state;
  }
}

function Component({ initialCount }) {
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  // ...
}
```

---

## Comparison: useState vs. useReducer

| Feature         | useState                            | useReducer                              |
| :-------------- | :---------------------------------- | :-------------------------------------- |
| **State Type**  | Primitive values, simple objects    | Complex objects, arrays                 |
| **State Logic** | Dispersed across event handlers     | Centralized in one reducer function     |
| **Testing**     | Harder to test isolated state logic | Easy to test reducer as a pure function |
| **Next State**  | Independent of previous state       | Dependent on previous state             |

---

## Best Practices

* **Never Mutate State**: Always return a new state object using the spread operator (`...state`).
* **Type Safety**: Use constants or enums for action types to avoid typos.
* **Keep Reducers Pure**: Do not trigger side effects (like API calls) inside the reducer.
