import { useState } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import UpcomingIpoCard from './components/Upcoming'
import Demat from './components/Demat'

function App() {
  return (
    <>
      <Navbar />
      <Header/>
      <UpcomingIpoCard />
      <Demat />
    </>
  )
}

export default App
