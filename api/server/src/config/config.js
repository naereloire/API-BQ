module.exports = {
  development: {
    username: 'postgres',
    password: 'example',
    database: 'bq_dev',
    host: 'db',
    dialect: 'postgres',
    operatorsAliases: false,
  },
  test: {
    username: 'postgres',
    password: 'example',
    database: 'bq_test',
    host: 'db',
    dialect: 'postgres',
    operatorsAliases: false,
  },
  production: {
    username: 'postgres',
    password: 'example',
    database: 'bq_prod',
    host: 'db',
    dialect: 'postgres',
    operatorsAliases: false,
  },
};
