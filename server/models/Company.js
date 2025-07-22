module.exports = (sequelize, DataTypes) => {
    const Company = sequelize.define('Company', {
        company_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        company_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        company_logo: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        tableName: 'companies',
        timestamps: false
    });

    Company.associate = (models) => {
        Company.hasMany(models.IPO, {
            foreignKey: 'company_id',
            onDelete: 'CASCADE'
        });
    };

    return Company;
};
