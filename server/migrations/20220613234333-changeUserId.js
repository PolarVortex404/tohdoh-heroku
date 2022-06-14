'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
          queryInterface.changeColumn('Tasks', 'user_id', {
              type: Sequelize.STRING
          }, { transaction: t }),
          queryInterface.changeColumn('Skips', 'user_id', {
              type: Sequelize.STRING,
          }, { transaction: t })
      ])
  })
  },

  async down (queryInterface, Sequelize) {
    down: (queryInterface, Sequelize) => {
      // return queryInterface.sequelize.transaction((t) => {
      //     return Promise.all([
      //         queryInterface.removeColumn('table_name', 'field_one_name', { transaction: t }),
      //         queryInterface.removeColumn('table_name', 'field_two_name', { transaction: t })
      //     ])
      // })
  }
  }
};
