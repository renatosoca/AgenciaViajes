import categoryModel from './category';
import commentModel from './comment';
import estateModel from './estate';
import userModel from './user';

estateModel.belongsTo(userModel, { foreignKey: 'userId', as: 'user' });
estateModel.belongsTo(categoryModel, { foreignKey: 'categoryId', as: 'category' });
estateModel.hasMany( commentModel, { foreignKey: 'estateId', as: 'comments' });

commentModel.belongsTo( userModel, { foreignKey: 'userId', as: 'user' } );
commentModel.belongsTo( estateModel, { foreignKey: 'estateId', as: 'estate' } );

export {
  categoryModel,
  commentModel,
  estateModel,
  userModel,
}
