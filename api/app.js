const express = require('express')
const routerAuth = require("./routes/routerAuth");
const routerPacients = require("./routes/routerPacient");
const routerEvents = require("./routes/routerEvents");
const path = require("path");
const morgan = require('morgan')
require('dotenv').config();
// MongoDB Connection
require('./database/db');

// Cors
const cors = require("cors");
const corsOptions = {
   credentials: true,
   origin: process.env.PATHCORS || '*',
   methods: ['GET', 'POST']
};

// Settings
const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", routerAuth);
app.use("/events", routerEvents);
app.use("/pacients", routerPacients);
// app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;