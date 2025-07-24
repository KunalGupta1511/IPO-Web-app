const { Company } = require("../models");

module.exports = async (req, res, next) => {
    const IPO_data = req.body;
    const priceBandRegex = /^\d+\s*-\s*\d+$/;
    const openDate = new Date(IPO_data.open_date);
    const closeDate = new Date(IPO_data.close_date);

    if (!IPO_data.price_band || typeof IPO_data.price_band !== "string" || !priceBandRegex.test(IPO_data.price_band)) {
        return res.status(400).json({ error: "Invalid price_band format. Expected format: 'min-max' (e.g., '100-120')" });
    }

    if (!IPO_data.open_date || 
        isNaN(Date.parse(IPO_data.open_date)) ||
        !IPO_data.close_date || 
        isNaN(Date.parse(IPO_data.close_date)) ||
        closeDate <= openDate
    ) {
        return res.status(400).json({ error: "Invalid date : Ensure open_date and close_date are valid and close_date is after open_date" });
    }

    if((IPO_data.issue_type).toLowerCase()!=="book built" && (IPO_data.issue_type).toLowerCase()!=="fixed price"){
        return res.status(400).json({error : "Invalid issue_type : Must be 'book built' or 'fixed price'"});
    }

    const status = (IPO_data.status || "").trim().toLowerCase();
    if(status!=="upcoming" && status!=="open" && status!=="listed" && status!=="closed"){
        return res.status(400).json({error : "Invalid status value"});
    }

    if (IPO_data.company_id === undefined ||
        typeof IPO_data.company_id !== "number" ||
        isNaN(IPO_data.company_id)
    ) {
        return res.status(400).json({ error: "Invalid Company ID" });
    }

    try {
        const doesCompanyExist = await Company.findByPk(IPO_data.company_id);

        if (!doesCompanyExist) {
            return res.status(400).json({ error: "Invalid company_id: No such company exists" })
        }

        next();
    } catch (err) {
        return res.status(500).json({ error: err.message })
    }
}