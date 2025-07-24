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
    const ipoId = parseInt(req.params.id);
    const type = req.query.type;

    if (isNaN(ipoId)) {
        return res.status(404).json({ error: "Ipo_id is invalid or doesn't exist" });
    }

    if (type !== 'rhp' && type !== 'drhp') {
        return res.status(400).json({ error: "Invalid query . Type should be rhp or drhp" });
    }

    try {
        const doesIpoExist = await IPO.findByPk(ipoId);
        if (!doesIpoExist) {
            return res.status(400).json({ error: "Corresponding IPO doesn't exist" });
        }

        const document = await Document.findOne({ where: { ipo_id: ipoId } })
        if (!document || (!document.rhp_pdf && !document.drhp_pdf)) {
            return res.status(404).json({ error: "Document not found or doesn't exist" });
        }

        const fileName = type === 'rhp' ? document.rhp_pdf : document.drhp_pdf;
        const filePath = path.join(__dirname, "..", fileName);

        if (!fs.existsSync(filePath)) {
            return res.status(404).json({ error: "File not found on server" });
        }

        return res.download(filePath, fileName);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}

const deleteDocument = async (req, res) => {
    const ipoId = parseInt(req.params.id);

    if (isNaN(ipoId)) {
        return res.status(400).json({ error: "Invalid IPO ID" });
    }

    try {
        const document = await Document.findOne({ where: { ipo_id: ipoId } });

        if (!document) {
            return res.status(404).json({ error: "No document found for this IPO" });
        }

        // Collect existing files (rhp/drhp) to delete
        const fileNames = [document.rhp_pdf, document.drhp_pdf];

        // Delete each file from disk
        fileNames.forEach((file) => {
            const filePath = path.join(__dirname, "..", file);
            if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
        });

        // Delete the document entry from DB
        await document.destroy();

        return res.status(200).json({ message: "Document deleted successfully" });
    } catch (err) {
        return res.status(500).json({ error: "Server error" });
    }
};

module.exports = {
    uploadDocument,
    downloadDocument,
    deleteDocument
}