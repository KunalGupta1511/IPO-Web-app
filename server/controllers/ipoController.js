const { where, Op } = require("sequelize");
const { IPO, Company, Sequelize } = require("../models");

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
    const IPO_data = req.body;

    try {
        const ipo = await IPO.findByPk(id);

        for (const key of Object.keys(IPO_data)) {
            ipo[key] = IPO_data[key];
        }

        if (ipo.ipo_price && ipo.current_market_price) {
            ipo.current_return = ((ipo.current_market_price - ipo.ipo_price) / ipo.ipo_price) * 100;
        }
        await ipo.save();
        return res.status(200).json({ success: true, ipo });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}

const deleteIPO = async (req, res) => {
    const id = req.params.id;

    try {
        const deleted = await IPO.destroy({ where: { ipo_id: id } });

        if (deleted === 0) {
            return res.status(404).json({ error: "IPO not found" });
        }

        return res.status(200).json({ success: true, message: "IPO deleted successfully" });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}

const searchIPO = async (req, res) => {
    try {
        const keyword = req.query.q;

        if (!keyword || keyword.trim() === "") {
            return res.status(400).json({ error: "Search keyword (q) is required" });
        }

        const ipos = await IPO.findAll({
            include: [
                {
                    model: Company,
                    attributes: ["company_name"],
                    required: false
                }
            ],
            where: {
                [Op.or]: [
                    Sequelize.where(Sequelize.cast(Sequelize.col("status"), "TEXT"), {
                        [Op.iLike]: `%${keyword}%`
                    }),
                    {
                        issue_type: {
                            [Op.iLike]: `%${keyword}%`
                        }
                    },
                    Sequelize.where(Sequelize.col("Company.company_name"), {
                        [Op.iLike]: `%${keyword}%`
                    })
                ]
            },
            order: [["listing_date", "DESC"]]
        })

        return res.status(200).json({ success: true, count: ipos.length, data: ipos });
    } catch (err) {
        return res.status(500).json({ error: err.message })
    }
}

module.exports = {
    addIPO,
    getAllIPOs,
    getIPO,
    updateIPO,
    deleteIPO,
    searchIPO
};