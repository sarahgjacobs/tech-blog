

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

// Creates blog post
Post.init(
    {
      post_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      text: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    },
    {
      sequelize
    }
  );
  
  module.exports = Post;