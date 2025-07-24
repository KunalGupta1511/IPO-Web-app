const { where } = require("sequelize");
const { Company } = require("../models");

const addCompany = async (req, res) => {
    const { company_name, company_logo } = req.body;

    if (!company_name) {
        return res.status(400).json({ error: "Please enter the company name" });
    }

    try {
        const doesCompanyExist = await Company.findOne({ where: { company_name } });

        if (doesCompanyExist) {
            return res.status(400).json({ error: "Company already registered once" });
        }

        const company = await Company.create({ company_name, company_logo });
        res.status(201).json({ success: true, company });

    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}

const getAllCompanies = async (req, res) => {
    try {
        const companies = await Company.findAll();

        if (companies.length === 0) {
            return res.status(400).json({ error: "No companies registered yet!" });
        }

        return res.status(200).json({ success: true, companies });
    } catch (err) {
        return res.status(500).json({ error: err.message })
    }
}

const getCompany = async (req, res) => {
    const id = req.params.id;

    try {
        const company = await Company.findOne({ where: { company_id: id } });

        if (!company) {
            return res.status(400).json({ error: "Company doesn't exist" });
        }

        return res.status(200).json({ success: true, company });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}

const updateCompany = async (req, res) => {
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

const deleteCompany = async (req, res) => {
    const id = req.params.id;

    try {
        const deleted = await Company.destroy({where : {company_id : id}});

        if(deleted===0){
            return res.status(404).json({ error: "Company not found" });
        }

        return res.status(200).json({ success: true, message: "Company deleted successfully" });
    } catch (err) {
        return res.status(500).json({error : err.message});
    }
}

module.exports = {
    addCompany,
    getAllCompanies,
    getCompany,
    updateCompany,
    deleteCompany
};