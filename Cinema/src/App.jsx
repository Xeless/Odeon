import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './App.css';
import { AuthProvider } from './hooks/AuthContext';
import Header from './composants/Header';
import Ticket from './pages/Tickets';
import Movie from './pages/Movie';
import Login from './pages/Login';
import Profil from './pages/Profil';

function App() {
  return (
    <AuthProvider>
      <GoogleOAuthProvider clientId='646063815400-9bc8nbdqil0ehk8peroqi158lknkup7e.apps.googleusercontent.com'>
        <Router>
          <Header />
          <main className='mx-auto contain-content bg-backgroundprincipal'>
            <Routes>
              <Route path="/ticket" element={<Ticket />} />
              <Route path="/" element={<Movie />} />
              <Route path="/login" element={<Login />} />
              <Route path='/profile' element={<Profil/>} />
            </Routes>
          </main>
        </Router>
      </GoogleOAuthProvider>
    </AuthProvider>
  );
}

export default App;
