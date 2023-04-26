import { DataTypes, Model } from 'sequelize';
import { DB } from '../database';
import { IComment } from '../interfaces';
import { Estate } from './estate';
import { User } from './user';

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
  },
  modelName: 'Comment'
});
Comment.belongsTo(User, { foreignKey: 'userId', targetKey: 'id', as: 'user' });
User.hasMany(Comment, { foreignKey: 'userId', sourceKey: 'id', as: 'comments' });

Comment.belongsTo(Estate, { foreignKey: 'estateId', targetKey: 'id', as: 'estate' });
Estate.hasMany(Comment, { foreignKey: 'estateId', sourceKey: 'id', as: 'comments' });


export { Comment };