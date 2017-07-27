'use strict';
module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define('Post', {
    content: DataTypes.TEXT,
    title: DataTypes.STRING,
    permalink: DataTypes.STRING,
	excerpt: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
		Post.belongsTo(models.Category, {
			onDelete: "CASCADE",
			foreignKey: {
				allowNull: false,
				as: 'CategoryId'
			}
		})
		Post.hasMany(models.Tag)
		Post.hasMany(models.Image)
      }
    }
  });
  return Post;
};
