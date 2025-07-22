'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('documents', {
      document_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      ipo_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'ipos',
          key: 'ipo_id'
        },
        onDelete: 'CASCADE'
      },
      rhp_pdf: Sequelize.STRING,
      drhp_pdf: Sequelize.STRING
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('documents');
  }
};
