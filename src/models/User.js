'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        displayName: {
          type: DataTypes.STRING
        },
        email: {
          type: DataTypes.STRING
        },
        password: {
          type: DataTypes.STRING
        },
        image: {
          type: DataTypes.STRING
        },
      
  },
  {
   underscored: true,
   timestamps: false,
   tableName: 'users',
  });
  User.associate = (models) => {
    User.hasMany(models.BlogPost, { foreignKey: 'userId', as: 'posts' });
  };

  return User; 
}   
