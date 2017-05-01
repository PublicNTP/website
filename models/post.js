'use strict';
module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define('Post', {
    content: DataTypes.TEXT,
    title: DataTypes.STRING,
    permalink: DataTypes.STRING,
	image_url: DataTypes.STRING,
	excerpt: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
		Post.belongsTo(models.Category, {
			onDelete: "CASCADE",
			foreignKey: {
				allowNull: false
			}
		})
		Post.hasMany(models.Tag)
      }
    }
  });
  return Post;
};
