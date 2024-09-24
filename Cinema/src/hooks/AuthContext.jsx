import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    // votre logique de connexion ici
  };

  const registerWithGoogle = async (userData) => {
    // Enregistrez l'utilisateur dans votre backend et mettez à jour l'état utilisateur
    setUser(userData);
    // éventuellement, enregistrez les données utilisateur dans votre base de données
  };

  const logout = () => {
    setUser(null);
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, registerWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
