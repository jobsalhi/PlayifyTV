import { useState } from 'react'
import ReactPlayer from 'react-player/youtube'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        {/* <h1 className="text-3xl font-bold text-blue-500">Hello, Tailwind!</h1> */}
        <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />
      </div>

    </>
  )
}

export default App
