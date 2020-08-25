module.exports = {
  development: {
    username: 'postgres',
    password: null,
    database: 'bq_development',
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
    database: 'bq_production',
    host: 'db',
    dialect: 'postgres',
    operatorsAliases: false,
  },
};
