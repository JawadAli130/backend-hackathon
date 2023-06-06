import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'backend_hackathon_dev',
  synchronize: true,
  logging: true,
  entities: ['dist/**/*.entity.{ts,js}'],
  // migrations: ['dist/core/db/migrations/*.{ts,js}'], // TODO: Handle migration if time left
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
