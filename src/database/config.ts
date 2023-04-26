import { Sequelize } from 'sequelize';

export const connectionDB = async () => {
  try {
    await DB.authenticate();
    await DB.sync({ force: false });
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

export const DB = new Sequelize(`${process.env.DB_NAME}`, `${process.env.DB_USER}`, `${process.env.DB_PASS}`, {
  host: `${process.env.DB_HOST}`,
  port: 3306,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  logging: false,
});