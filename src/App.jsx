import { useEffect, useState } from 'react'
import './App.css'

function App() {

const [enabled, setEnable] = useState(false)
const [position, setPosition] = useState({ x: 0, y: 0})

useEffect(() =>{
  console.log('effect', { enabled })

  const handleMove = (event) =>{
    const { clientX, clientY } = event
    console.log('handleMove', { clientX, clientY })
    setPosition({ x: clientX, y: clientY })
  }

  if (enabled) {
    window.addEventListener('pointermove', handleMove)
  }
  
  return () => {
    window.removeEventListener('pointermove', handleMove)
  }

}, [enabled])

  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}>

      </div>
    <button onClick={() => setEnable(!enabled)}>{enabled ? 'Desactivar' : 'Activar'} Puntero</button>
    </main>

  )
}

export default App
