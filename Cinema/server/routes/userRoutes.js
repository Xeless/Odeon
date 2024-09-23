import express from 'express';
import { registerUser, loginUser, registerWithGoogle } from '../controllers/userController.js';

const router = express.Router();

// Route pour l'inscription d'un utilisateur
router.post('/register', registerUser);

// Route pour la connexion d'un utilisateur
router.post('/login', loginUser);

// Route pour l'enregistrement avec Google
router.post('/google', registerWithGoogle);

export default router;
