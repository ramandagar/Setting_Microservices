'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Airports',[
      {
        name:'Kampegoda International airport',
        cityId:15,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: 'MySore Airports',
        cityId:16,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:'Mangaluru International airport',
        cityId:17,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:'MUmbai International airport',
        cityId:18,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:'Indira Gandhi Airport',
        cityId:19,
        createdAt:new Date(),
        updatedAt:new Date()
      }
   ],{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
