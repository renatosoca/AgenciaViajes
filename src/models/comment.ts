import { DataTypes, Model } from 'sequelize';
import DB from '../database/config';
import { Comment } from '../interfaces';
import estateModel from './estate';
import userModel from './user';

interface ICommentModel extends Model<Comment>, Comment {}

const commentModel= DB.define<ICommentModel>('Comment', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
  message: { type: DataTypes.STRING, allowNull: false},
  userId: { 
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { 
      model: 'users', 
      key: 'id',
    } 
  }
},{
  timestamps: true,
});

commentModel.belongsTo( userModel, { foreignKey: 'userId', as: 'user' } );
commentModel.belongsTo( estateModel, { foreignKey: 'estateId', as: 'estate' } );

export default commentModel;