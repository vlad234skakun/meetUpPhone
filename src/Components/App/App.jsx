// import { useState } from 'react'

import './App.css'

import Header from '../Header/Header'
import Main from '../Main/Main.jsx'

import { LanguageProvider } from '../../context/LanguageProvider.jsx'

function App() {
  

  return (
    <LanguageProvider>
      <Header/>
      <Main/>
    </LanguageProvider>
  )
}

export default App
