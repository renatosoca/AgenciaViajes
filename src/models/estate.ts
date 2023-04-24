import { DataTypes, Model } from 'sequelize';
import { DB } from '../database';
import { IEstate } from '../interfaces';

interface IEstateModel extends Model<IEstate>, IEstate { };

const Estate = DB.define<IEstateModel>('Estate', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
  name: { type: DataTypes.STRING(100), allowNull: false },
  description: { type: DataTypes.STRING, defaultValue: '', allowNull: false },
  bedrooms: { type: DataTypes.INTEGER, defaultValue: 0, allowNull: false },
  bathrooms: { type: DataTypes.INTEGER, defaultValue: 0, allowNull: false },
  parkingLots: { type: DataTypes.INTEGER, defaultValue: 0, allowNull: false },
  street: { type: DataTypes.STRING, allowNull: false },
  latitude: { type: DataTypes.STRING(30), allowNull: false },
  longitude: { type: DataTypes.STRING(30), allowNull: false },
  image: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.DECIMAL(12, 2), allowNull: false },
  published: { type: DataTypes.BOOLEAN, defaultValue: false }
}, {
  timestamps: true,
  scopes: {
    customResponse: {
      attributes: { exclude: ['userId', 'categoryId', 'createdAt', 'updatedAt'] }
    },
    withoutTimestamps: {
      attributes: { exclude: ['createdAt', 'updatedAt'] }
    }
  }
});

export default Estate;