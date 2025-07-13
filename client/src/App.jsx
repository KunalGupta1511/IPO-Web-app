import { useState } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import UpcomingIpoCard from './components/UpcomingIpoCard'

function App() {
  return (
    <>
      <Navbar />
      <Header/>
      <UpcomingIpoCard />
    </>
  )
}

export default App
