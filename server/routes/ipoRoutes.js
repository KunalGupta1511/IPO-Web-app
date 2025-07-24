const express = require("express")
const router = express.Router();

const validateIPO = require("../middlewares/validateIPO");
const auth = require("../middlewares/auth");

const {
    addIPO,
    deleteIPO,
    getAllIPOs,
    getIPO,
    updateIPO,
    searchIPO
} = require("../controllers/ipoController");

router
    .post("/ipos", auth, validateIPO, addIPO)
    .get("/ipos/search",searchIPO)
    .get("/ipos", getAllIPOs)
    .get("/ipos/:id", getIPO)
    .put("/ipos/:id",auth, updateIPO)
    .delete("/ipos/:id",auth, deleteIPO)

module.exports = router;