const { where } = require("sequelize");
const { IPO } = require("../models");

const addIPO = async (req, res) => {
    const IPO_data = req.body;
    const { ipo_price, current_market_price } = IPO_data;

    if (ipo_price && current_market_price) {
        IPO_data.current_return = ((current_market_price - ipo_price) / ipo_price) * 100;
    }

    try {
        const ipo = await IPO.create({ ...IPO_data });
        return res.status(201).json({ success: true, ipo });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}

const getAllIPOs = async (req, res) => {
    try {
        const ipos = await IPO.findAll();

        if (ipos.length === 0) {
            return res.status(400).json({ error: "No ipos registered yet!" });
        }

        return res.status(200).json({ success: true, ipos });
    } catch (err) {
        return res.status(500).json({ error: err.message })
    }
}

const getIPO = async (req, res) => {
    const id = req.params.id;

    try {
        const ipo = await IPO.findOne({ where: { ipo_id: id } });

        if (!ipo) {
            return res.status(400).json({ error: "IPO doesn't exist" });
        }

        return res.status(200).json({ success: true, ipo });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}

const updateIPO = async (req, res) => {
    const id = req.params.id;
    const { company_name, company_logo } = req.body;

    try {
        const company = await Company.findOne({ where: { company_id: id } });

        if (!company) {
            return res.status(404).json({ error: "Company not found" });
        }

        if (company_name) company.company_name = company_name;
        if (company_logo) company.company_logo = company_logo;

        await company.save();

        return res.status(200).json({ success: true, company });

    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}

const deleteIPO = async (req, res) => {
    const id = req.params.id;

    try {
        const deleted = await Company.destroy({ where: { company_id: id } });

        if (deleted === 0) {
            return res.status(404).json({ error: "Company not found" });
        }

        return res.status(200).json({ success: true, message: "Company deleted successfully" });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}

module.exports = {
    addIPO,
    getAllIPOs,
    getIPO,
    updateIPO,
    deleteIPO
};