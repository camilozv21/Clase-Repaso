const express = require('express');
require('dotenv').config();
const colors = require('colors');
const cors = require('cors');
const connectDB = require('./database/config/db');
const port = process.env.PORT || 5000;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
connectDB();

const userRouter = require('./routes/userRoutes');

app.use(userRouter);

app.listen(port, console.log(`server runing on port ${port}`));
