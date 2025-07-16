import { useState } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import UpcomingIpoCard from './components/Upcoming'
import Demat from './components/Demat'
import Ongoing from './components/Ongoing'
import NewListed from './components/NewListed'
import IpoNews from './components/IpoNews'
import IpoAnalysis from './components/IpoAnalysis'
import FaqSection from './components/FaqSection'

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <UpcomingIpoCard />
      <Demat />
      <Ongoing />
      <NewListed />
      <section className="news-analysis">
        <IpoNews />
        <IpoAnalysis />
      </section>
      <FaqSection />
    </>
  )
}

export default App
