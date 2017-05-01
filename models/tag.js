'use strict';
module.exports = function(sequelize, DataTypes) {
  var Tag = sequelize.define('Tag', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
		Tag.belongsTo(models.Post, {
          onDelete: "CASCADE",
          foreignKey: 'PostId'
		})
      }
    }
  });
  return Tag;
};
