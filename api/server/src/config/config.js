module.exports = {
  development: {
    username: 'postgres',
    password: null,
    database: 'bq_dev',
    host: 'db',
    dialect: 'postgres',
    operatorsAliases: false,
  },
  test: {
    username: 'postgres',
    password: null,
    database: 'bq_test',
    host: 'db',
    dialect: 'postgres',
    operatorsAliases: false,
  },
  production: {
    username: 'postgres',
    password: null,
    database: 'bq_prod',
    host: 'db',
    dialect: 'postgres',
    operatorsAliases: false,
  },
};
