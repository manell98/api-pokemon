export interface IEnvironment {
  app: {
    name: string;
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
    synchronize: boolean;
  };
}

export const environment: IEnvironment = {
  app: {
    name: process.env.npm_package_name || 'nest-postgres',
    host: process.env.APP_HOST || 'localhost:3000',
    logLevel: process.env.LOG_LEVEL || 'debug',
    port: Number(process.env.API_PORT) || 3000,
  },
  db: {
    database: process.env.DB_DATABASE || 'nest-postgres',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME || 'admin',
    password: process.env.DB_PASSWORD || 'admin',
    synchronize: Boolean(process.env.DB_SYNCRONIZE) || false, // config pra gerar as migrations no bd, só deve ser usada em desenvolvimento - EM PROD DEVE SER FALSE
  },
};
