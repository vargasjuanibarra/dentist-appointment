import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from './store/store'
import { decrement, decrementAsync, decrementBy5, increment, incrementAsync, incrementBy5 } from './store/counter/counterSlice'

function App() {
 const count = useSelector((state: RootState) => state.counter.value)
 const loading = useSelector((state: RootState) => state.counter.loading)
 const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          count is {count}
        </p>
        <div>
          <button onClick={() => dispatch(increment())}>
            +
          </button>

          <button onClick={() => dispatch(decrement())}>
            -
          </button>
        </div>
        <div>
          <button onClick={() => dispatch(incrementBy5())}>
            + 5
          </button>

          <button onClick={() => dispatch(decrementBy5())}>
            - 5
          </button>
        </div>
        <div>
          <button disabled={loading} onClick={() => dispatch(incrementAsync(69))}>
            Add Asynchronously
          </button>
          <button disabled={loading} onClick={() => dispatch(decrementAsync(69))}>
            Minus Asynchronously
          </button>
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
