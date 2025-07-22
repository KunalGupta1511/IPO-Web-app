'use strict';
module.exports = (sequelize, DataTypes) => {
    const IPO = sequelize.define('IPO', {
        ipo_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        company_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price_band: DataTypes.STRING,
        open_date: DataTypes.DATE,
        close_date: DataTypes.DATE,
        issue_size: DataTypes.STRING,
        issue_type: DataTypes.STRING,
        listing_date: DataTypes.DATE,
        status: {
            type: DataTypes.ENUM('Upcoming', 'Open', 'Closed', 'Listed')
        },
        ipo_price: DataTypes.DECIMAL(10, 2),
        listing_price: DataTypes.DECIMAL(10, 2),
        listing_gain: DataTypes.DECIMAL(5, 2),
        current_market_price: DataTypes.DECIMAL(10, 2),
        current_return: DataTypes.DECIMAL(5, 2)
    }, {
        tableName: 'ipos',
        timestamps: false
    });

    IPO.associate = function (models) {
        IPO.belongsTo(models.Company, {
            foreignKey: 'company_id'
        });
        IPO.hasMany(models.Document, {
            foreignKey: 'ipo_id',
            onDelete: 'CASCADE',
            as : 'documents'
        });
    };

    return IPO;
};
