import { useState } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import UpcomingIpoCard from './components/Upcoming'
import Demat from './components/Demat'
import Ongoing from './components/Ongoing'
import NewListed from './components/NewListed'

function App() {
  return (
    <>
      <Navbar />
      <Header/>
      <UpcomingIpoCard />
      <Demat />
      <Ongoing />
      <NewListed />
    </>
  )
}

export default App
