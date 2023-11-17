import { useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer.jsx'
import Home from './pages/user/Home.jsx'
import AuthGoogle from '../src/components/AuthGoogle.jsx'

/**
 * Componente principal de la aplicación.
 * @returns {JSX.Element} Elemento JSX que contiene el componente Home y el Footer.
 */
function App() {
  return (
    <>
      <AuthGoogle />
      {/*<Home />
      <Footer />*/}
    </>
  )
}

export default App
