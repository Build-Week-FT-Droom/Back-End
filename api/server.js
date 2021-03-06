const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authRouter = require('../auth/auth-router.js');
const jobsRouter = require('../jobs/jobs-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/', jobsRouter);

server.get('/', (req, res) => {
    res.status(200).json(`Droom Sanity Check`);
});

module.exports = server;