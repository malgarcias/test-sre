const mysql = require('mysql');
let cachedDb2;
function getDbPool() {
    if (!cachedDb2) {
        cachedDb2 = mysql.createPool({
            connectionLimit: 1,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE,
            //socketPath: `/cloudsql/${process.env.INST_CON_NAME}`
            host: 'localhost',
            //port: 3306
        });

    }
    return cachedDb2;
}

// Retrieve and return single person from the database.
exports.login = (req, res) => {
    getDbPool().query('select * from users where name=? and password=?',
        [req.body.name,req.body.password],
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