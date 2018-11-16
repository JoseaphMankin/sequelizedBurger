module.exports = {

  "development": {
    "username": "root",
    "password": null,
    "database": "burgers_db",
    "port": 3306,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.SQL_USER,
    "password": process.env.SQL_PASSWORD,
    "database": process.env.SQL_DATABASE,
    "host": process.env.SQL_HOST,
    "port": 3306,
    "dialect": "mysql"
  }

}
