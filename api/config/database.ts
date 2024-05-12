// db.ts
import config from "./config.json";
import { Sequelize, ConnectionOptions, Options } from "sequelize";
const sequelize = new Sequelize(config.development as Options);
// sequelize migration:generate --name <migration-name>
// sequelize db:migrate
// sequelize db:migrate:undo
// Test the database connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Database connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

testConnection();

export default sequelize;
