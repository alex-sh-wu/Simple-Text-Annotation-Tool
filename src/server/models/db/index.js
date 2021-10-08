const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('api', 'postgres', 'password', {
  host: 'localhost',
  dialect: 'postgres',
  define: {
    freezeTableName: true
  },
  logging: console.log,
});

sequelize.authenticate()
  .then(() => console.log("Connection has been established with db"))
  .catch((error) => console.error("Db error", error));

module.exports = {
  sequelize,
};
