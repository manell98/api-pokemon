export interface IEnvironment {
  app: {
    host: string;
    logLevel: string;
    port: number;
  };
  db: {
    database: string;
    host: string;
    port: number;
    username: string;
    password: string;
  };
}

export const environment: IEnvironment = {
  app: {
    host: process.env.APP_HOST || 'localhost:3000',
    logLevel: process.env.LOG_LEVEL || 'debug',
    port: Number(process.env.API_PORT) || 3000,
  },
  db: {
    database: process.env.DATABASE || 'nest-postgres',
    host: process.env.HOST_DB || 'localhost',
    port: Number(process.env.PORT) || 5432,
    username: process.env.USERNAME || 'admin',
    password: process.env.PASSWORD || 'admin',
  },
};
