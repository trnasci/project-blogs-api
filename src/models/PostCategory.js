module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define(
      'PostCategory',
      {
        postId: {
          allowNull: false,
          primaryKey: true,
          type: DataTypes.INTEGER,
          reference: {
            model: 'BlogPost',
            key: 'id'
          },
        },
        categoryId: {
          allowNull: false,
          primaryKey: true,
          type: DataTypes.INTEGER,
          reference: {
            model: 'Category',
            key: 'id'
          },
        },
      },
      { 
        tableName: 'post_categories',
        timestamps: false,
        underscored: true,
      }
    );
  
    PostCategory.associate = (models) => {
      models.BlogPost.belongsToMany(models.Category, {
        as: 'categories',
        through: PostCategory,
        foreignKey: 'postId',
        otherKey: 'categoryId',
      });
      models.Category.belongsToMany(models.BlogPost, {
        as: 'blogpost',
        through: PostCategory,
        foreignKey: 'categoryId',
        otherKey: 'postId',
      });
    };
  
    return PostCategory;
  };