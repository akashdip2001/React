import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation/Navigation'

function App() {
  const [count, setCount] = useState(0)

  return (
    // Navigation() is a component that is imported from Navigation.jsx
    <Navigation/> // Navigation component is called here
  )
}

export default App
