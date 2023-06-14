
import express, { response } from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const authRoutes = express.Router();
const UserModel = mongoose.model('User');

authRoutes.post('/SignUp', async (req, res) => {
    console.log(req.body);
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
    return res.status(422).send({ error: 'Fill all the fields' });
    }

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(422).send({ error: 'Email already exists' });
        }

        const user = new User({
            name,
            email,
            password,
        });

        await user.save();
        // res.send({ message: 'User saved successfully' });
        const token = jwt.sign({ _id: user._id}, process.env.JWT_SECRET);
        res.send({token});
        
    } catch (error) {
        console.log(`Database error: ${error}`);
        return res.status(500).send({ error: 'Error saving user' });
    }
});



export default authRoutes;