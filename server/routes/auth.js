const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models");
const { where } = require('sequelize');

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
            const doesUserExist = await User.findOne({ where: { email } })
            if (doesUserExist) {
                return res.status(400).json({ error: `User with email ${email} already exists` });
            }

            const hashedPassword = await bcrypt.hash(password, 12)
            const newUser = await User.create({ name, email, password: hashedPassword });
            return res.status(200).json({ newUser })
        }
        catch (err) {
            return res.status(400).json({ error: err.message });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res
            .status(400)
            .json({ error: "Please enter all the fields" });
    }
    //Email validation
    const emailReg = /[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/

    if (!emailReg.test(email)) {
        return res
            .status(400)
            .json({ error: "Incorrect Email-ID" })
    }

    try {
        const doesUserExist = await User.findOne({where : { email }})

        if (!doesUserExist) {
            return res
                .status(400)
                .json({ error: "Incorrect email or password" })
        }

        const doesPasswordMatch = await bcrypt.compare(password, doesUserExist.password);

        if (!doesPasswordMatch) {
            return res
                .status(400)
                .json({ error: "Incorrect email or password" })
        }

        const payload = { id: doesUserExist.id };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });

        const user = { doesUserExist, password: undefined }
        return res.status(200).json({ token, user })
    }
    catch (err) {
        console.log(err);
        return res
            .status(500)
            .json({ error: err.message })
    }
})

module.exports = router;