const mysql = require('mysql');
let cachedDb2;
function getDbPool() {
    if (!cachedDb2) {
        cachedDb2 = mysql.createPool({
            connectionLimit: 1,
            user: process.env.SQL_USER,
            password: process.env.SQL_PASSWORD,
            database: process.env.SQL_NAME,
            socketPath: `/cloudsql/${process.env.INST_CON_NAME}`
            //host: '35.188.208.20',
            //port: 3306
        });

    }
    return cachedDb2;
}

// Retrieve and return single person from the database.
exports.login = (req, res) => {
    getDbPool().query('select * from users where id=?',
        [req.params.id],
        function (error, results, fields) {
            if (error) {
                return res.status(500).send({
                    message: "Server error"
                });
            }
            console.log(results);
            if (results.length < 1) {
                return res.status(404).send({
                    message: "Resource not found"
                });
            }
            res.status(200).
                type('application/json').
                set('Accept', 'application/json').
                send(JSON.stringify(results[0]));
        });
};