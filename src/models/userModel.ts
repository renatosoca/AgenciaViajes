import { DataTypes, Model } from 'sequelize';
import { DB } from '../database';
import { User } from '../interfaces';

interface IUserModel extends Model<User>, User {
  id: number;
}

export const userModel= DB.define<IUserModel >('User', {
  name: { type: DataTypes.STRING, allowNull: false },
  lastname: { type: DataTypes.STRING, allowNull: false},
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  token: { type: DataTypes.STRING, defaultValue: null },
  confirmed: { type: DataTypes.BOOLEAN, defaultValue: false },
}, {
  tableName: 'user',
});