const router = require('express').Router;
const db = require('../jobs/jobs-model.js');
const bcrypt = require('bcryptjs');
const generateToken = require('../auth-middleware/generateToken.js');
const validateToken = require('../auth-middleware/validateToken.js');

// GET JOBS

router.get("/jobs", (req, res) => {
    db.findJobs()
        .then(jobs => {
            res.status(200).json(jobs);
        })
        .catch(err => res.status(500).json(console.log(err), err));
});

// GET JOBS BY ID

router.get("/jobs/:id", (req, res) => {
    const { id } = req.params;
    db.findJobsById(id)
    .then(jobs => {
        const job = jobs[0];
        if (job) {
            res.status(200).json(job);
        } else {
            res.status(500).json({ error: `job with id ${id} does not exist` })
        }
    })
    .catch(err => res.send(err));
});

// GET JOBS BY USER ID

router.get("/jobs/user/:id", (req, res) => {
    const { id } = req.params;
    db.findById(id)
        .then(user => {
            if (user) {
                db.findJobsByUser(id)
                .then(jobs => {
                    if (jobs.length) {
                        res.status(200).json(jobs);
                    } else {
                        res.status(404).json({ message: "The user does not have jobs selected" });
                    }
                });
            } else {
                res.status(404).json({ message: `User ${id} does not exist` });
            }
        })
        .catch(err => res.send(console.log(err)));
});

