import DB from '../database/config';
import { categoryModel, commentModel, estateModel, userModel } from '../models';
import { categorySeed, commentSeed, estateSeed, userSeed } from './dataSeed';

export const importDevData = async () => {
  try {
    await DB.authenticate();

    //Create Tables
    await DB.sync();

    //Import Data
    await Promise.allSettled([
      userModel.bulkCreate(userSeed),
      categoryModel.bulkCreate(categorySeed),
      estateModel.bulkCreate(estateSeed),
      commentModel.bulkCreate(commentSeed)
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
    process.exit(1);
  }
}

export const createTables = async () => {
  try {
    await DB.authenticate();

    await userModel.sync();
    await categoryModel.sync();
    await estateModel.sync();
    
    process.exit();
  } catch (error) {
    console.log(error)
    process.exit(1);
  }
}

if (process.argv[2] === '-importDev') {
  importDevData();
}
if (process.argv[2] === '-deleteDev') {
  deleteDevData();
}
if (process.argv[2] === '-createTables') {
  createTables();
}