'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
	return queryInterface.addColumn('Posts', 'excerpt', {
		type: Sequelize.TEXT
	})
  },

  down: function (queryInterface, Sequelize) {
	return queryInterface.removeColumn('Posts', 'excerpt')
  }
};
