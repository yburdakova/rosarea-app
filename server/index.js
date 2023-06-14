
import express from 'express';
import bodyParser from 'body-parser';
import './db.js';
import authRoutes from './routes/authRoutes.js';

const app = express();
const PORT =  5000;

app.use(bodyParser.json());
app.use(authRoutes)

app.get( '/', (req, res) => {
    res.send('This is HOME PAGE')
});

app.listen(PORT, () => {
    console.log(`Server Running on Port: http://localhost:${PORT}`)
})