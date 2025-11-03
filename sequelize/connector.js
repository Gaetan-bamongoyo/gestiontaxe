// const { FOREIGNKEYS } = require('sequelize/lib/query-types');
const dbConfig = require('../conf/db.js');

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB, 
    dbConfig.USER,
    dbConfig.PASSWORD,{
        host: dbConfig.HOST,
        port: dbConfig.PORT,
        dialect: dbConfig.dialect,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
)

sequelize.authenticate()
.then(()=>{
    console.log('connected...')
})
.catch(err =>{
    console.log('Error'+ err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.paiement = require('../models/paiement.js')(sequelize, DataTypes)
db.tarif = require('../models/tarif.js')(sequelize, DataTypes)
db.poste = require('../models/poste.js')(sequelize, DataTypes)

db.poste.hasMany(db.paiement, {
    foreignKey: 'poste_id',
    as: 'postes'
})
db.paiement.belongsTo(db.poste, {
    foreignKey: 'poste_id',
    as: 'paiements'
})

db.tarif.hasMany(db.paiement, {
    foreignKey: 'tarif_id',
    as: 'tarifs'
})
db.paiement.belongsTo(db.tarif, {
    foreignKey: 'tarif_id',
    as: 'paiement'
})

db.sequelize.sync({ force: false })
.then(()=>{
    console.log('yes re-sync done...')
})

module.exports = db