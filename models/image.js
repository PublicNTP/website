'use strict';
module.exports = function(sequelize, DataTypes) {
  var Image = sequelize.define('Image', {
    file_name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
		Image.belongsTo(models.Post)	
      }
    }
  });
  return Image;
};
