import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementAsync, incrementByAmount } from './store/reducers/counterSlice'

const App = () => {
  const {value} = useSelector((state)=> state.counter)
  const dispatch = useDispatch();
  return (
    <div className='m-auto container mt-5 bg-blue-100 p-10'>
      <h1 className='text-center font-bold text-3xl text-blue-900'>
        Counter: {value}
      </h1>
      <div className='text-center mt-5'>
        <button onClick={()=>dispatch(increment())} className='border-2 font-semibold border-blue-900 bg-transparent text-blue-900 px-5 py-2 rounded-md'>
          Increment
        </button>
        <button onClick={()=>dispatch(decrement())} className='border-2 mx-5 font-semibold border-blue-900 bg-transparent text-blue-900 px-5 py-2 rounded-md'>
          Decrement
        </button>
        <button onClick={()=>dispatch(incrementAsync(7))} className='border-2 font-semibold border-blue-900 bg-transparent text-blue-900 px-5 py-2 rounded-md'>
          Increment By 7
        </button>
      </div>
    </div>
  )
}

export default App