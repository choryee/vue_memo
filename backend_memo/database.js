
// https://mariadb.com/kb/en/getting-started-with-the-nodejs-connector/

const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: '127.0.0.1',
    user:'root',
    password: '1234',
    connectionLimit: 5,
    database: 'memo'
});

module.exports = { // <-- index.js에서 사용하기 위해 모듈로 만드는 것.
    async run(query){ // 이건 강사가 추가한 것.
        return new Promise((resolve,reject)=>{

            pool.getConnection()
                .then(conn => {

                    conn.query(query)
                        .then((rows) => {
                            resolve(rows);
                            console.log('database.js에서', rows); //[ {val: 1}, meta: ... ]
                            //Table must have been created before
                            // " CREATE TABLE myTable (id int, val varchar(255)) "
                            //return conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);
                        })
                        .then((res) => {
                            console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
                            conn.end();
                        })
                        .catch(err => {
                            //handle error
                            console.log(err);
                            conn.end();
                            reject(err);
                        })

                }).catch(err => {
                    reject(err);
                //not connected
            });
        })

    }

}