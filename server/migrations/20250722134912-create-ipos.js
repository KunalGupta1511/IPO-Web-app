'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ipos', {
      ipo_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      company_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'companies',
          key: 'company_id'
        },
        onDelete: 'CASCADE'
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
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ipos');
  }
};
