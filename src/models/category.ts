import { DataTypes, Model } from 'sequelize';
import { DB } from '../database';
import { Category } from '../interfaces';

interface ICategoryModel extends Model<Category>, Category {}

const categoryModel= DB.define<ICategoryModel>('Category', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
  name: { type: DataTypes.STRING, allowNull: false},
  description: { type: DataTypes.STRING, defaultValue: '', allowNull: true },
},{
  timestamps: true,
  scopes: {
    customResponse: {
      attributes: { exclude: ['description', 'createdAt', 'updatedAt'] }
    },
    withoutTimestamps: {
      attributes: { exclude: ['createdAt', 'updatedAt'] }
    }
  }
});

export default categoryModel;