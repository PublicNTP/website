'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
	return queryInterface.addColumn('Tags', 'PostId', {
		type: Sequelize.INTEGER,
		references: {
			model: 'Posts',
			key: 'id'
		}
	})
  },

  down: function (queryInterface, Sequelize) {
	return queryInterface.removeColumn('Tags', 'PostId')
  }
};
