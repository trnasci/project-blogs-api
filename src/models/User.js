'use strict';

module.exports = (sequelize, DataTypes) => {
    const UserSchema = sequelize.define('User', {
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
    });

    UserSchema.associate = (models) => {
      UserSchema.hasMany(models.BlogPosts, { foreignKey: 'user_id', as: 'blog_posts' });
    };
    return UserSchema;
}