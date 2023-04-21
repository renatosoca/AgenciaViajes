import { DataTypes, Model } from 'sequelize';
import { DB } from '../database';
import { User } from '../interfaces';
import { generateToken } from '../utils';

interface IUserModel extends Model<User>, User {}

const userModel= DB.define<IUserModel>('User', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
  name: { type: DataTypes.STRING, allowNull: false },
  lastname: { type: DataTypes.STRING, allowNull: false},
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  token: { type: DataTypes.STRING, defaultValue: generateToken(), allowNull: false },
  confirmed: { type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false },
},{
  timestamps: true,
  scopes: {
    customResponse: {
      attributes: { exclude: ['password', 'token', 'confirmed'] }
    }
  }
});

export default userModel;