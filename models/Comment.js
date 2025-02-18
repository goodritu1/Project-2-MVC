const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      comment_text: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      car_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'car',
          key: 'id'
        }
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'userCredentials',
          key: 'id'
        }
      }
    }, {
      sequelize,
      modelName: 'Comment',
      timestamps: true,
      underscored: true,
    });

    module.exports = Comment;
  
