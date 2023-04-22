import { DataTypes, Model } from 'sequelize';
import { DB } from '../database';
import { Comment } from '../interfaces';

interface ICommentModel extends Model<Comment>, Comment {}

const commentModel= DB.define<ICommentModel>('Comment', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
  message: { type: DataTypes.STRING, allowNull: false}
},{
  timestamps: true,
  scopes: {
    customResponse: {
      attributes: { exclude: ['estateId', 'userId', 'createdAt', 'updatedAt'] }
    },
    withoutTimestamps: {
      attributes: { exclude: ['createdAt', 'updatedAt'] }
    }
  }
});

export default commentModel;