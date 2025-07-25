const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");

const {
    getStats
} = require("../controllers/dashboardController");
router
    .get("/admin/stats", auth, getStats);

module.exports = router;