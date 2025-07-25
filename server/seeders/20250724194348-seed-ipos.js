'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("ipos", [
      {
        company_id: 1,
        price_band: '100-120',
        open_date: new Date('2025-08-01'),
        close_date: new Date('2025-08-05'),
        issue_size: '500 Cr',
        issue_type: 'Book Built Issue',
        listing_date: new Date('2025-08-12'),
        status: 'Upcoming',
        ipo_price: 110.00,
        listing_price: null,
        listing_gain: null,
        current_market_price: null,
        current_return: null
      },
      {
        company_id: 2,
        price_band: '200-220',
        open_date: new Date('2025-07-20'),
        close_date: new Date('2025-07-24'),
        issue_size: '1000 Cr',
        issue_type: 'Fixed Price Issue',
        listing_date: new Date('2025-08-01'),
        status: 'Open',
        ipo_price: 210.00,
        listing_price: null,
        listing_gain: null,
        current_market_price: null,
        current_return: null
      },
      {
        company_id: 3,
        price_band: '300-310',
        open_date: new Date('2025-07-10'),
        close_date: new Date('2025-07-14'),
        issue_size: '750 Cr',
        issue_type: 'Book Built Issue',
        listing_date: new Date('2025-07-22'),
        status: 'Closed',
        ipo_price: 305.00,
        listing_price: null,
        listing_gain: null,
        current_market_price: null,
        current_return: null
      },
      {
        company_id: 4,
        price_band: '400-450',
        open_date: new Date('2025-06-20'),
        close_date: new Date('2025-06-24'),
        issue_size: '1200 Cr',
        issue_type: 'Fixed Price Issue',
        listing_date: new Date('2025-07-01'),
        status: 'Listed',
        ipo_price: 430.00,
        listing_price: 460.00,
        listing_gain: 6.98,
        current_market_price: 475.00,
        current_return: 10.47
      },
      {
        company_id: 5,
        price_band: '150-160',
        open_date: new Date('2025-07-25'),
        close_date: new Date('2025-07-29'),
        issue_size: '300 Cr',
        issue_type: 'Book Built Issue',
        listing_date: new Date('2025-08-06'),
        status: 'Upcoming',
        ipo_price: 155.00,
        listing_price: null,
        listing_gain: null,
        current_market_price: null,
        current_return: null
      },
      {
        company_id: 6,
        price_band: '90-100',
        open_date: new Date('2025-06-01'),
        close_date: new Date('2025-06-05'),
        issue_size: '450 Cr',
        issue_type: 'Fixed Price Issue',
        listing_date: new Date('2025-06-12'),
        status: 'Listed',
        ipo_price: 95.00,
        listing_price: 92.00,
        listing_gain: -3.16,
        current_market_price: 90.00,
        current_return: -5.26
      },
      {
        company_id: 7,
        price_band: '250-260',
        open_date: new Date('2025-08-10'),
        close_date: new Date('2025-08-14'),
        issue_size: '600 Cr',
        issue_type: 'Book Built Issue',
        listing_date: new Date('2025-08-20'),
        status: 'Upcoming',
        ipo_price: 255.00,
        listing_price: null,
        listing_gain: null,
        current_market_price: null,
        current_return: null
      },
      {
        company_id: 8,
        price_band: '500-520',
        open_date: new Date('2025-07-01'),
        close_date: new Date('2025-07-05'),
        issue_size: '1500 Cr',
        issue_type: 'Book Built Issue',
        listing_date: new Date('2025-07-13'),
        status: 'Listed',
        ipo_price: 510.00,
        listing_price: 530.00,
        listing_gain: 3.92,
        current_market_price: 550.00,
        current_return: 7.84
      }
    ]);

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ipos', null, {});
  }
};
