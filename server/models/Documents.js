'use strict';
module.exports = (sequelize, DataTypes) => {
    const Document = sequelize.define('Document', {
        document_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        ipo_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        rhp_pdf: DataTypes.STRING,
        drhp_pdf: DataTypes.STRING
    }, {
        tableName: 'documents',
        timestamps: false,
        underscored : true
    });

    Document.associate = function (models) {
        Document.belongsTo(models.IPO, {
            foreignKey: 'ipo_id',
            as : 'ipo',
            onDelete : 'CASCADE'
        });
    };

    return Document;
};
