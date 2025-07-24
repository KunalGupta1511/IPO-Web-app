const { where } = require("sequelize");
const { Document, IPO } = require("../models");
const fs = require("fs");
const path = require("path");

const uploadDocument = async (req, res) => {
    const ipoId = parseInt(req.params.id);

    if (isNaN(ipoId)) {
        return res.status(404).json({ error: "Ipo_id is invalid or doesn't exist" });
    }

    const rhpFile = req.files['rhp_pdf']?.[0]
    const drhpFile = req.files['drhp_pdf']?.[0]

    if (!rhpFile || !drhpFile) {
        return res.status(400).json({ error: "rhp_file or drhp_file not found" });
    }

    try {
        const doesIpoExist = await IPO.findByPk(ipoId);
        if (!doesIpoExist) {
            return res.status(400).json({ error: "Corresponding IPO doesn't exist" });
        }

        const existingDoc = await Document.findOne({ where: { ipo_id: ipoId } })

        if (existingDoc) {
            if (existingDoc.rhp_pdf) {
                //exits controller file and directs to uploads/filename to replace it
                fs.unlinkSync(path.join(__dirname, "..", "uploads", path.basename(existingDoc.rhp_pdf)));
            }
            if (existingDoc.drhp_pdf) {
                fs.unlinkSync(path.join(__dirname, "..", "uploads", path.basename(existingDoc.drhp_pdf)));
            }

            existingDoc.rhp_pdf = rhpFile.path;
            existingDoc.drhp_pdf = drhpFile.path;

            await existingDoc.save();

            return res.status(200).json({ success: true, existingDoc, message: "Documents updated successfully!" });
        }
        else {
            const newDoc = await Document.create({
                ipo_id: ipoId,
                rhp_pdf: rhpFile.path,
                drhp_pdf: drhpFile.path
            })

            return res.status(201).json({ success: true, newDoc, mesaage: "Documents created successfully!" });
        }
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}

const downloadDocument = async (req, res) => {
    const ipoId = req.params.id;
}
module.exports = {
    uploadDocument,
    downloadDocument
}