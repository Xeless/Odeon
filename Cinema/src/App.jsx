import { useState } from 'react'
import './App.css'
import Header from './composants/Header'


function App() {
  
  return (
    <>
<Header />
    <main className='container mx-auto p-4 flex items-center justify-center'>
      <div className='flex flex-col items-center text-center'>
      <img src='https://image.noelshack.com/fichiers/2024/38/5/1726833341-test.jpg' alt=''></img>
      <h1 className='text-white mt-9'>Jujutsu Kaizen</h1>
      <span className='text-white mt-3'>l'auteur</span>
      </div>
    </main>
    </>
  )
}

export default App
