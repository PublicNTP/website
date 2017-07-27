'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return [
		queryInterface.bulkInsert('Tags', [
			{
				name: "tag-1"
			},
			{
				name: "tag-2"
			}	
		])
    ]
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('Tags');
  }
};
