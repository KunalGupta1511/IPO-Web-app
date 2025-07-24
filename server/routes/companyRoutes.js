const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const { addCompany,
        deleteCompany,
        getAllCompanies,
        getCompany,
        updateCompany
    } = require("../controllers/companyController");

router
    .post("/companies",auth, addCompany)
    .get("/companies", getAllCompanies)
    .get("/companies/:id", getCompany)
    .put("/companies/:id",auth, updateCompany)
    .delete("/companies/:id",auth, deleteCompany)

module.exports = router;