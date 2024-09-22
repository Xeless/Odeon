import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Header from './composants/Header'
import Ticket from './pages/Tickets';
import Movie from './pages/Movie';


function App() {
  
  return (
    <>
     <Router>
      <header>
     <Header />
     </header>
    <main className='mx-auto contain-content bg-backgroundprincipal'>
    <Routes>
    <Route path="/ticket" element={<Ticket />} />
    <Route path="/movie" element={<Movie />} />
    </Routes>
    </main>
    </Router>
    </>
  )
}

export default App
