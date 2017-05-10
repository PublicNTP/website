'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return [
	queryInterface.bulkInsert('Categories', [
			{
				name: "Category 1",
				permalink: "/category-1"
			},
			{
				name: "Category 2",
				permalink: "/category-2"
			}	
		])
    ]
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('Categories');
  }
};
