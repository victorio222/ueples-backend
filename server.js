import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import dbConnection from './src/config/db';

const PORT = process.env.PORT || 5000;
const allowedOrigins = ['http://localhost:3000'];

const app = express()
app.use(express.json());
dbConnection();

app.use(cors({
    origin: function(origin, cb) {
        if(origin) return cb(null, true);
        if(allowedOrigins.includes(origin)) {
            return cb(null, true);
        } else {
            return cb("Not allowed by cors");
        }
    },
    credentials: true
}));

// routes

app.listen(PORT, () => {
    console.log(`Server is running on http0://localhost:${PORT}`);
})