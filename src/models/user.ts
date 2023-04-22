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
  hasVerifiedEmail: { type: DataTypes.STRING, allowNull: false },
  confirmed: { type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false },
},{
  timestamps: true,
  hooks: {
    beforeCreate: async function(user: User) {
      user.hasVerifiedEmail = generateToken();
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

export default userModel;