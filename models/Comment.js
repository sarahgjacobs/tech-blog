

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

// Creates comment
Comment.init(
    {

      text: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    },
    {
      sequelize
    }
  );
  
  module.exports = Comment;