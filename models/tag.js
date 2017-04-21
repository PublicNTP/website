'use strict';
module.exports = function(sequelize, DataTypes) {
  var Tag = sequelize.define('Tag', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
		Tag.belongsToMany(models.Post, {
			through: 'post_tags'			
		})
      }
    }
  });
  return Tag;
};
