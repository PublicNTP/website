'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
	return queryInterface.addColumn('Posts', 'CategoryId', {
		type: Sequelize.INTEGER,
		references: {
			model: 'Categories',
			key: 'id'
		}
	})
  },

  down: function (queryInterface, Sequelize) {
	return queryInterface.removeColumn('Posts', 'CategoryId')
  }
};
