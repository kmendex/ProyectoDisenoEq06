const { Pool } = require('pg');
//
require('dotenv/config');
//

const pool = new Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false }
});

module.exports = {

        getOrganization : async function (orgCode, callback){ 
                let values = [orgCode];
                let result = await pool.query('SELECT "readOrganization"($1)', values, callback);
                return result.rows[0];
        },
        getCoordination : async function (orgCode, callback){
                let values = [orgCode];
                let result = await pool.query('SELECT "readCoordination"($1)', values, callback);
                return result.rows[0];
        },
        getZone : async function (crdCode, callback){
                let values = [crdCode];
                let result = await pool.query('SELECT "readZone"($1)', values, callback);
                return result.rows[0];
        },
        getBranch : async function (zonCode, callback){
                let values = [zonCode];
                let result = await pool.query('SELECT "readBranch"($1)', values, callback);
                return result.rows[0];
        },
        getGroup : async function (zonCode, brnCode, callback){
                let values = [zonCode, brnCode];
                let result = await pool.query('SELECT "readGroup"($1,$2)', values, callback);
                return result.rows[0];
        }
};
