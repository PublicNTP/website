'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
	return queryInterface.removeColumn('Posts', 'image_url')
  },

  down: function (queryInterface, Sequelize) {
  }
};
