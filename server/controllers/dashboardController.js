const { where } = require("sequelize");
const { Company, IPO, Document } = require("../models");

const getStats = async (req, res) => {
    try {
        const ipoCount = await IPO.count();
        const companyCount = await Company.count();

        return res.status(200).json({
            totalIPOs: ipoCount,
            totalCompanies: companyCount
        });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}

module.exports = {
    getStats
}