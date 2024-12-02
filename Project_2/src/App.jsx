import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import ContactHeader from './components/ContactHeader/ContactHeader'
import ContactForm from './components/ContactForm/ContactForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* // Navigation() is a component that is imported from Navigation.jsx */}
      <Navigation /> {/*// Navigation component is called here*/}
      <ContactHeader />
      <ContactForm />
    </div>
  );
}

export default App
