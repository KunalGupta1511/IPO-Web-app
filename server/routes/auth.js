const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const { User } = require("../models");

router.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body

        if (name.length > 25) {
            return res
                .status(400)
                .json({ error: "Name cannot have more than 25 characters" })
        }

        const emailReg = /[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/

        if (!emailReg.test(email)) {
            return res
                .status(400)
                .json({ error: "Incorrect Email-ID" })
        }

        if (password.length < 6) {
            return res
                .status(400)
                .json({ error: "Password must be atleast 6 characters long" })
        }

        try {
            const hashedPassword = await bcrypt.hash(password, 12)
            const newUser = await User.create({ name, email, password: hashedPassword });
            return res.status(200).json({ newUser })
        }
        catch (err) {
            return res.status(400).json({ error: err.errors ? err.errors[0].message : err.message });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/login', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});

module.exports = router;
