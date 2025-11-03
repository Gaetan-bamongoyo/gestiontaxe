module.exports = {
    // HOST: 'mysql-185158-0.cloudclusters.net',
    // USER: 'classrom',
    // PASSWORD: '@gaetan1234A',
    // DB: 'db_classroom',
    // dialect: 'mysql',
    // PORT: '10150',

    HOST: 'localhost',
    USER: 'root',
    PASSWORD: '',
    DB: 'db_roadsense',
    dialect: 'mysql',
    PORT: '3306',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    }
}