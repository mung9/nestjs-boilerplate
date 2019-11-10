import { Sequelize, SequelizeOptions } from "sequelize-typescript";
import { Provider } from "@nestjs/common";
import { User } from "../models/User";
import { Providers } from "../../constants";

const sequelizeOptions: SequelizeOptions = {
  host: process.env.DB_HOST || "tt-db",
  port: process.env.DB_PORT ? Number.parseInt(process.env.DB_PORT) : 3306,
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "1234",
  database: process.env.DB || "mydb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  define: {
    freezeTableName: true,
    underscored: true
  }
};

export const databaseProviders: Provider[] = [
  {
    provide: Providers.SEQUELIZE,
    useFactory: async () => {
      const sequelize = new Sequelize(sequelizeOptions);
      sequelize.addModels([User]);
      await sequelize.sync({ force: false });
      return sequelize;
    }
  }
];
