import { useState } from 'react'
import classes from './Counter.module.scss'

export function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button
        className={classes.increment}
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Increment
      </button>
      <button
        className={classes.decrement}
        onClick={() => {
          setCount(count - 1)
        }}
      >
        Decrement
      </button>
    </div>
  )
}
