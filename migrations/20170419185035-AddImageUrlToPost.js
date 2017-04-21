'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
	return queryInterface.addColumn('Posts', 'image_url', {
		type: Sequelize.STRING
	})
  },

  down: function (queryInterface, Sequelize) {
	return queryInterface.removeColumn('Posts', 'image_url')
  }
};
