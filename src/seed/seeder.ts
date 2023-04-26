import { DB } from '../database';
import { Category, Comment, Estate, User } from '../models';
import { categorySeed, commentSeed, estateSeed, userSeed } from './dataSeed';

export const importDevData = async () => {
  try {
    await DB.authenticate();

    //Create Tables
    await DB.sync();

    //Import Data
    await Promise.allSettled([
      User.bulkCreate(userSeed),
      Category.bulkCreate(categorySeed),
      Estate.bulkCreate(estateSeed),
      Comment.bulkCreate(commentSeed)
    ]);

    process.exit();
  } catch (error) {
    console.log(error)
    process.exit(1);
  }
}

export const deleteDevData = async () => {
  try {
    //Delete Tables
    await DB.sync({ force: true });

    process.exit();
  } catch (error) {
    console.log(error)
    console.log('ERRORRRRRRRRR')
    process.exit(1);
  }
}

if (process.argv[2] === '-importDev') {
  importDevData();
}
if (process.argv[2] === '-deleteDev') {
  deleteDevData();
}