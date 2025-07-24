const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth");
const upload = require("../middlewares/uploads");

const { 
    uploadDocument,
    downloadDocument
} = require("../controllers/documentController");

router
    .post(
        "/ipos/:id/upload",
        auth,
        upload.fields([
            { name: 'rhp_pdf', maxCount: 1 },
            { name: 'drhp_pdf', maxCount: 1 }
        ]), 
        uploadDocument
    )
    .get("/ipos/:id/download",downloadDocument)

module.exports = router