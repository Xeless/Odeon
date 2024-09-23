import React, { useState } from 'react';
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login, registerWithGoogle } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await login(email, password);
    } catch (err) {
      console.error("Login erreur", err);
      setError('Erreur lors de la connexion. Veuillez vérifier vos informations.');
    } finally {
      setLoading(false);
    }
  };

  const loginWithGoogle = useGoogleLogin({
    onSuccess: async (response) => {
      console.log('Réponse de Google :', response);
      try {
        if (!response.access_token) {
          throw new Error('Aucune access_token fournie');
        }

        // Récupérer les informations de l'utilisateur
        const userInfoResponse = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
          headers: {
            Authorization: `Bearer ${response.access_token}`,
          },
        });

        if (!userInfoResponse.ok) {
          const errorData = await userInfoResponse.json();
          throw new Error('Erreur lors de la récupération des informations utilisateur : ' + errorData.error);
        }

        const user = await userInfoResponse.json();
        
        // Vérifiez que les informations nécessaires sont présentes
        if (!user.name || !user.email || !user.picture) {
          throw new Error('Informations utilisateur manquantes.');
        }

        const res = await registerWithGoogle({ 
          username: user.name,
           email: user.email,
           picture: user.picture
           });
        console.log('Utilisateur enregistré ou connecté :', res);
        navigate('/');
      } catch (err) {
        console.error("Erreur lors de l'enregistrement avec Google", err);
        setError('Erreur lors de l\'enregistrement avec Google : ' + err.message);
      }
    },
    onFailure: (error) => {
      console.error("Erreur de connexion Google :", error);
      setError('Erreur lors de la connexion avec Google : ' + error.message);
    },
  });

  return (
    <GoogleOAuthProvider clientId="646063815400-9bc8nbdqil0ehk8peroqi158lknkup7e.apps.googleusercontent.com">
      <div
        className="min-h-screen flex flex-col justify-center items-center bg-slate-500"
        style={{
          backgroundImage: 'url("https://ds.static.rtbf.be/article/image/770x433/1/9/0/6e0917469214d8fbd8c517dcdc6b8dcf-1630402493.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <form className="bg-opacity-10 backdrop-blur-lg p-8 rounded-xl border bg-purple-900 max-w-sm w-full" onSubmit={handleLogin}>
          <h1 className="text-white text-3xl font-bold text-center mb-6">Login</h1>

          {error && <div className="text-red-500 mb-4">{error}</div>}

          <label htmlFor="email" className="block mb-2 text-white">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            className="p-2 rounded-md w-full mb-4"
            placeholder="username@gmail.com"
            required
          />

          <label htmlFor="password" className="block mb-2 text-white">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="p-2 rounded-md w-full mb-6"
            placeholder="Password"
            required
          />

          <button type="submit" className="text-white p-3 rounded-md w-full bg-purple-700" disabled={loading}>
            {loading ? 'Connecting...' : 'Sign In'}
          </button>

          <span className="flex text-white font-bold justify-center mt-5">ou continue avec</span>

          <div className="flex gap-4 justify-center mt-5">
            <button
              type="button"
              className="w-36 flex justify-center p-3 bg-white rounded-lg"
              onClick={loginWithGoogle}
            >
              <img src="/uploads/google.svg" alt="Se connecter avec Google" />
            </button>
            <button type="button" className="w-36 flex justify-center p-3 bg-white rounded-lg">
              <img src="/uploads/facebook.svg" alt="Se connecter avec Facebook" />
            </button>
          </div>
        </form>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;
