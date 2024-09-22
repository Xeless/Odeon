import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useState } from 'react'
import './App.css'
import Header from './composants/Header'
import Ticket from './pages/Tickets';
import Movie from './pages/Movie';
import Login from './pages/Login'


function App() {
  
  return (
    <>
    <GoogleOAuthProvider clientId='646063815400-9bc8nbdqil0ehk8peroqi158lknkup7e.apps.googleusercontent.com'>
     <Router>
      <header>
     <Header />
     </header>
    <main className='mx-auto contain-content bg-backgroundprincipal'>
    <Routes>
    <Route path="/ticket" element={<Ticket />} />
    <Route path="/" element={<Movie />} />
    <Route path="/login" element={<Login />} />
    </Routes>
    </main>
    </Router>
    </GoogleOAuthProvider>
    </>
  )
}

export default App
