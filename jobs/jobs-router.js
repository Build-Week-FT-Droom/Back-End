const router = require('express').Router();
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

// POST JOB

router.post("/jobs", validateToken, (req, res) => {
    const job = req.body;
    if (job) {
        db.insert(job)
            .then(jobs => {
                res.status(201).json({ message: "Listing created", job });
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({ error: "There was an issue when attempting to create this job" });
            });
    } else {
        res.status(400).json({ errorMessage: "Please fill in all required fields" });
    }
});

router.put("/jobs/:id", validateToken, (req, res) => {
//     const changes = req.body;
//     db.updateJobs(req.params.id, changes)
//         .then(job => {
//             if (job) {
//                 res.status(200).json({ message: `Job ${req.params.id} successfully updated` });
//             }
//         })
//         .catch(error => {
//             console.log(error);
//             res.status(500).json({ message: "Error updating job" });
//         });
// });
const id = req.params.id;
    const changes = req.body;
    db.updateJobs(id, changes)
        .then(updated => {
            res.status(200).json(updated);
        })
        .catch(err => {
            res.status(500).json({ error: "Could not modify Id" });
        });
});
// router.put('/jobs/:id', (req, res) => {
//     Events.updateVendor(req.body, req.params.id )
//     .then(vendor => {
//         console.log(vendor)
//         if (!vendor) {
//             res.status(404).json({message: "No vendor exists by that ID!"})
//         } else {
//             Events.getVendorById(req.params.id)
//             .then(uVendor => {
//                 res.status(201).json(uVendor)
//             })
//         }
//     })
//     .catch(err => {
//         console.log(err)
//         res.status(500).json(err)
//     })
// })

router.delete("/jobs/:id", validateToken, (req, res) => {
    const { id } = req.params;
    db.destroy(id)
        .then(job => {
            if (job) {
                res.status(200).json({ message: `Job ${id} has been deleted` });
            } else {
                res.status(404).json({ message: `Job ${id} not found` });
            }
        })
        .catch(error => {
            res.status(500).json({ error: "Error deleting job" });
        });
});

module.exports = router;

