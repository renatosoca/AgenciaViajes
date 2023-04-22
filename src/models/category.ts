import { DataTypes, Model } from 'sequelize';
import DB from '../database/config';
import { Category } from '../interfaces';

interface ICategoryModel extends Model<Category>, Category {}

const categoryModel= DB.define<ICategoryModel>('Category', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
  name: { type: DataTypes.STRING, allowNull: false},
  description: { type: DataTypes.STRING, defaultValue: '', allowNull: true },
},{
  timestamps: true,
});

export default categoryModel;