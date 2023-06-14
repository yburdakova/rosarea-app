
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const CONNECTION_URL = "mongodb+srv://resareadmin:resareadmin123@cluster0.t9nk5vy.mongodb.net/?retryWrites=true&w=majority";
const PORT =  5000;

app.use(bodyParser.json())

app.get( '/', (req, res) => {
    res.send('This is HOME PAGE')
});

app.post( '/SignUp', (req, res) => {
    console.log(req.body);
    res.send('This is Sign Up PAGE')
});

app.listen(PORT, () => {
    console.log(`Server Running on Port: http://localhost:${PORT}`)
})