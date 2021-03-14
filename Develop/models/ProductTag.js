const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        // This references the `product` model
        model: 'product',
        key: 'product_id',
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        // This references the `tag` model
        model: 'tag',
        key: 'tag_id',
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
