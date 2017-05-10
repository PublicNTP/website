'use strict';
var models = require('../models'); 

module.exports = {
  up: function(queryInterface, Sequelize, done) {
    queryInterface.createTable('Images', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      file_name: {
        type: Sequelize.STRING
      },
	  PostId: {
		type: Sequelize.INTEGER,
		onDelete: "CASCADE",
		allowNull: false,
		references: {
			model: 'Posts',
			key: 'id'
		}
	  },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
	models.Post.findAll()
	.then(function(posts) {
		posts = JSON.parse(JSON.stringify(posts))
		var images = posts.map(function(post, index) {
			return {
				PostId: post.id,
				file_name: post.image_url,
				createdAt: post.createdAt,
				updatedAt: post.updatedAt
			}
		})
		queryInterface.sequelize.query(queryInterface.QueryGenerator.bulkInsertQuery('Images', images))
		done();
	})
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Images');
  }
};
