import { useState } from 'react';
import axios from 'axios';

const useAuth = () => {
    const [error, setError] = useState(null);

    const login = async (email, password) => {
        setError(null); // Réinitialiser l'erreur avant de tenter la connexion
        try {
            const response = await axios.post('api/users/login', { email, password });
            console.log(response.data);
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Une erreur s\'est produite');
            throw err;
        }
    };

    const registerWithGoogle = async ({ username, email, picture }) => { // Assurez-vous que ces champs sont passés
        setError(null); // Réinitialiser l'erreur avant de tenter l'inscription
        try {
            const response = await axios.post('http://localhost:5000/api/users/google', { username, email, picture }, { // Utilisez un objet
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(response.data);

            localStorage.setItem('userPicture', response.data.user.picture);

            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Une erreur s\'est produite');
            throw err;
        }
    };
    

    return { login, registerWithGoogle, error };
};

export default useAuth;
