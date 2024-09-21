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
     <Header />
    <main className='container mx-auto p-4 flex items-center justify-center'>
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
