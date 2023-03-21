/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [{
      title: 'Transportation',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Food',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Utilities',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Clothing',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Medical/Healthcare',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Housing',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Education',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Debt',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Personal',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Entertainment',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Gifts/Donations',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
