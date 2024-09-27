import User from '../models/User.js';
import bcrypt from 'bcrypt';
import { body, validationResult } from 'express-validator';

// Inscription d'un utilisateur
export const registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const hashedPassword = password ? await bcrypt.hash(password, 10) : undefined;
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: 'Utilisateur créé avec succès !' });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la création de l\'utilisateur', error });
    }
};

// Connexion d'un utilisateur
export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Utilisateur non trouvé' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Mot de passe incorrect' });

        res.json({ message: 'Connexion réussie !', user });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la connexion', error });
    }
};



// Inscription avec Google
export const registerWithGoogle = async (req, res) => {
    // Validation des champs
    await body('email').isEmail().withMessage('Doit être un email valide').run(req);
    await body('username').notEmpty().withMessage('Le nom d\'utilisateur ne peut pas être vide').run(req);
    await body('picture').optional().isURL().withMessage('L\'URL de l\'image doit être valide').run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, username, picture } = req.body;

    try {
        let user = await User.findOne({ email });
        if (!user) {
            user = new User({ email, username, picture });
            await user.save();
        }
        res.status(201).json({ message: 'Utilisateur créé ou déjà existant avec succès !', user });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la création de l\'utilisateur', error });
    }
};
