import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import User from './models/User.js';
import userRoutes from './routes/userRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors()); 
app.use(express.json());

// Connexion à MongoDB
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB Connected!');
}).catch(err => console.log(err));

// Utilisation des routes
app.use('/api/users', userRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
