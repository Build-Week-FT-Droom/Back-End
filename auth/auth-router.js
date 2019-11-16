const router = require('express').Router();
const db = require('../auth/auth-model.js');
const bcrypt = require('bcryptjs');
const generateToken = require('../auth-middleware/generateToken.js');
const validateToken = require('../auth-middleware/validateToken');


// AUTH GET ROUTES

router.get('/users', validateToken, (req, res) => {
    db.findUsers()
        .then(user => {
            res.json({ loggedInUser: req.username, users });
        })
        .catch(err => res.send(err));
});

router.get('/user/:id', (req, res) => {
    const { id } = req.params;
    db.findById(id)
    .then(user => {
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(500).json({ error: `user with id ${id} is not valid` })
        }
    })
    .catch(err => res.send(err));
});