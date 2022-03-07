const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/mongoDB');

const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/tickets', require('./routes/ticketRoutes'));

app.use(errorHandler);

app.listen(port, console.log(`Listening on port ${port}`));
