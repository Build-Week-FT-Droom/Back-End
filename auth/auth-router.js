const router = require('express').Router();
const db = require('../auth/auth-model.js');
const bcrypt = require('bcryptjs');
const generateToken = require('../auth-middleware/generateToken.js');
const validateToken = require('../auth-middleware/validateToken');


// AUTH GET ROUTES

router.get('/users', validateToken, (req, res) => {
    db.findUsers()
        .then(users => {
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

// AUTH POST ROUTES

router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10)

    user.password = hash;

    db.add(user)
    .then(saved => {
        res.status(201).json(saved);
    })
    .catch(error => {
        console.log(error)
        res.status(500).json(error);
    });
});

router.post("/login", (req, res) => {
    let { email, password } = req.body;
    if (email && password) {
        db.findBy({ email })
            .first()
            .then(user => {
                if (user && bcrypt.compareSync(password, user.password)) {
                    const token = generateToken(user);
                    res.status(200).json({ message: `Welcome ${user.first_name}`, token, userId: user.id })
                } else {
                    res.status(401).json({ message: "Please enter a valid email and password" });
                }
            })
            .catch(error => {
                console.log(error);
                res.status(500).json({ message: `server error ${error}` });
            });
    } else {
        res.status(400).json({ message: `Username and password required` });
    }
});

// AUTH PUT ROUTES

router.put('/user/:id', validateToken, (req, res) => {
    const changes = req.body;
    db.update(req.params.id, changes)
        .then(user => {
            if(user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ message: 'Invalid user' });
            }
        })
        .catch(error => {
            console.log(error); 
            res.status(500).json({ message: 'Could not update user'}, error);
        });
});

// AUTH DELETE ROUTES

router.delete('/user/:id', validateToken, (req, res) => {
    db.destroy(req.params.id)
        .then(count => {
            if (count > 0) {
                res.status(200).json({ message: 'User deleted' });
            } else {
                res.status(404).json({ message: 'User could not be found' });
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: 'Could not delete user' }, error);
        });
});

module.exports = router;



