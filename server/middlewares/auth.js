const jwt = require("jsonwebtoken")

const { User } = require("../models");
const { where } = require("sequelize");

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(" ")[1];

        jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
            try {
                if (err) {
                    return res.status(401).json({ error: "Unauthorized!" });
                }

                const user = await User.findOne({
                    where: { id: payload.id },
                    attributes: { exclude: ["password"] }
                });

                if(!user){
                    return res.status(404).json({error : "User not found"})
                }
                
                req.user = user;
                next();
            } catch (err) {
                return res.status(500).json({error : err.message})
            }
        })
    }
    else {
        return res.status(403).json({ error: "Forbidden 🛑🛑" })
    }
}
