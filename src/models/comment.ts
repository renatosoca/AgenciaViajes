import { DataTypes, Model } from 'sequelize';
import { DB } from '../database';
import { IComment } from '../interfaces';

interface ICommentModel extends Model<IComment>, IComment { }

const Comment = DB.define<ICommentModel>('Comment', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
  comment: { type: DataTypes.STRING, allowNull: false },
}, {
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

export default Comment;