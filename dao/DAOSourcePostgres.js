const { Pool } = require('pg');
//
require('dotenv/config');
//

const pool = new Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false }
});

module.exports = {
        // Retornan un json o un null

        // { "name":"...","juridicalCode":"...","description":"...","logoURL":"...","country":"...",
        //   "province":"...","canton":"...","district":"...","address":"..." }
        getOrganization : async function (orgCode, callback){ 
                let values = [orgCode];
                let result = await pool.query('SELECT "readOrganization"($1)', values, callback);
                return result.rows[0].readOrganization;
        },
        // { "code":"...","name":"...","creationDate":"...","UnitType":"..." }
        getCoordination : async function (orgCode, callback){
                let values = [orgCode];
                let result = await pool.query('SELECT "readCoordination"($1)', values, callback);
                return result.rows[0].readCoordination;
        },
        // [ { "code":"...","name":"...","creationDate":"...","UnitType":"..."}, ... ]
        getZone : async function (crdCode, callback){
                let values = [crdCode];
                let result = await pool.query('SELECT "readZone"($1)', values, callback);
                return result.rows[0].readZone;
        },
        // [ { "code":"...","name":"...","creationDate":"...","UnitType":"..."}, ...]
        getBranch : async function (zonCode, callback){
                let values = [zonCode];
                let result = await pool.query('SELECT "readBranch"($1)', values, callback);
                return result.rows[0].readBranch;
        },
        // [ { "code":"...","name":"...","creationDate":"...","UnitType":"..."}, ... ]
        getGroup : async function (zonCode, brnCode, callback){
                let values = [zonCode, brnCode];
                let result = await pool.query('SELECT "readGroup"($1,$2)', values, callback);
                return result.rows[0].readGroup;
        },
        // [ { "identificationCode":"...","fullName":"...","rol":"...","state":"..." }, ... ]
        getMembers : async function (grpCode, callback){
                let values = [grpCode];
                let result = await pool.query('SELECT "readMembers"($1)', values, callback);
                return result.rows[0].readMembers;
        },        
        // { "fullName":"...","identificationCode":"...","birthdate":"...","state":"...","country":"...",
        //   "province":"...","canton":"...","district":"...","address":"..."}
        getPerson : async function(prsIdentification, callback){
                let values = [prsIdentification];
                let result = await pool.query('SELECT "readPerson"($1)', values, callback);
                return result.rows[0].readPerson;
        },
        // [ {"type":1,"name":"...","value":"..."}, ...]
        // type: 1:telefono | 3:correo
        getContactPerson : async function(prsIdentification, callback){
                let values = [prsIdentification];
                let result = await pool.query('SELECT "readContactPerson"($1)', values, callback);
                return result.rows[0].readContactPerson;
        },
        // [ {"id...":1,"name":"..."}, ...]
        getCountries : async function(callback){
                let result = await pool.query('SELECT "readCountries"()', callback);
                return result.rows[0].readCountries;
        },
        getProvinces : async function (ctrName, callback){
                console.log(ctrName);
                let values = [ctrName];
                let result = await pool.query('SELECT "readProvinces"($1)', values, callback);
                console.log(result.rows[0].readProvinces);
                return result.rows[0].readProvinces;
        },
        getCantons : async function (prvName, callback){
                let values = [prvName];
                let result = await pool.query('SELECT "readCantons"($1)', values, callback);
                return result.rows[0].readCantons;
        },
        getDistricts : async function (ctnName, callback){
                let values = [ctnName];
                let result = await pool.query('SELECT "readDistricts"($1)', values, callback);
                return result.rows[0].readDistricts;
        },
        getBoss : async function (untCode, callback){
                let values = [untCode];
                let result = await pool.query('SELECT "readBoss"($1)', values, callback);
                return result.rows[0].readBoss;
        }

};
