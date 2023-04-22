import { Sequelize } from 'sequelize';

export const connectionDB = async () => {
  try {
    await DB.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

const dbName: string = process.env.DB_NAME || 'agencia_viajes';
const dbUser: string = process.env.DB_USER || 'root';
const dbPass: string = process.env.DB_PASS || '';
const dbHost: string = process.env.DB_HOST || 'localhost';

const DB = new Sequelize(dbName, dbUser, dbPass, {
  host: dbHost,
  port: 3306,
  dialect: 'mysql',
  define: {
    timestamps: true
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

export default DB;