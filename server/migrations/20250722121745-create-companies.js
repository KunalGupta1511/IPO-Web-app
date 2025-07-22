'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('companies',{
      company_id : {
        allowNull : false,
        autoIncrement : true,
        primaryKey : true,
        type: Sequelize.INTEGER
      },
      company_name : {
        allowNull : false,
        type : Sequelize.STRING
      },
      company_logo : {
        type : Sequelize.STRING,
        allowNull : true
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('companies')
  }
};
