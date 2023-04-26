import { DataTypes, Model } from 'sequelize';
import { DB } from '../database';
import { IUser } from '../interfaces';
import { generateToken } from '../utils';

interface IUserModel extends Model<IUser>, IUser { }

const User = DB.define<IUserModel>('User', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
  name: { type: DataTypes.STRING(100), allowNull: false },
  lastname: { type: DataTypes.STRING(100), allowNull: false },
  image: { type: DataTypes.STRING, defaultValue: '', allowNull: true },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING(64), allowNull: false },
  hasVerifiedEmail: { type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false },
  status: {
    type: DataTypes.ENUM,
    values: ['active', 'inactive', 'deleted'],
    defaultValue: 'active',
    allowNull: false
  },
  token: { type: DataTypes.STRING, defaultValue: '', allowNull: false },
}, {
  timestamps: true,
  hooks: {
    beforeCreate: function (user: IUser) {
      user.token = generateToken();
    }
  },
  scopes: {
    customResponse: {
      attributes: { exclude: ['password', 'token', 'confirmed', 'createdAt', 'updatedAt'] }
    },
    withoutTimestamps: {
      attributes: { exclude: ['createdAt', 'updatedAt'] }
    }
  }
});

export { User }