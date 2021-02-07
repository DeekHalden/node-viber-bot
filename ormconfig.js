module.exports = {
  name: 'default',
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  entities: ['dist/models/**/*.entity.js', 'src/models/**/*.entity.ts'],
  migrations: ['dist/migrations/*.js'],
  logging: true,
  syncronize: false,
  cli: {
    migrationsDir: 'src/migrations',
  },
};
