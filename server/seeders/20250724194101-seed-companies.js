"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("companies", [
      {
        company_id: 1,
        company_name: "Bluestock Ltd",
        company_logo: "bluestock_logo.png",
      },
      {
        company_id: 2,
        company_name: "TechFlow Inc",
        company_logo: "techflow_logo.png",
      },
      {
        company_id : 8,
        company_name: "Amazon Inc",
        company_logo: "amazon_logo.png",
      },
      // Add more companies as needed
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("companies", null, {});
  },
};
