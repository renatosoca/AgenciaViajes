import { DataTypes, Model } from 'sequelize';
import { DB } from '../database';
import { IEstate } from '../interfaces';
import { Category } from './category';
import { User } from './user';

interface IEstateModel extends Model<IEstate>, IEstate { };

const Estate = DB.define<IEstateModel>('Estate', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
  name: { type: DataTypes.STRING(100), allowNull: false },
  description: { type: DataTypes.STRING, defaultValue: '', allowNull: false },
  bedrooms: { type: DataTypes.INTEGER, defaultValue: 0, allowNull: false },
  bathrooms: { type: DataTypes.INTEGER, defaultValue: 0, allowNull: false },
  parkingLots: { type: DataTypes.INTEGER, defaultValue: 0, allowNull: false },
  street: { type: DataTypes.STRING, allowNull: false },
  latitude: {
    type: DataTypes.STRING(60),
    allowNull: false,
    validate: {
      min: -90,
      max: 90
    },
  },
  longitude: {
    type: DataTypes.STRING(60),
    allowNull: false,
    validate: {
      min: -180,
      max: 180
    }
  },
  image: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.DECIMAL(12, 2), allowNull: false },
  published: { type: DataTypes.BOOLEAN, defaultValue: false },
}, {
  timestamps: true,
  scopes: {
    customResponse: {
      attributes: { exclude: ['userId', 'categoryId', 'createdAt', 'updatedAt'] }
    },
    withoutTimestamps: {
      attributes: { exclude: ['createdAt', 'updatedAt'] }
    }
  },
  /* paranoid: true, */
});

Estate.belongsTo(Category, { foreignKey: 'categoryId', targetKey: 'id', as: 'category' });
Category.hasMany(Estate, { foreignKey: 'categoryId', sourceKey: 'id', as: 'estates' });

User.hasMany(Estate, { foreignKey: 'userId', sourceKey: 'id', as: 'estates' });
Estate.belongsTo(User, { foreignKey: 'userId', targetKey: 'id', as: 'user' });

export { Estate };