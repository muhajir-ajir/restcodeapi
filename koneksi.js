var mysql = require('mysql');

//membuat koneksi database
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'P@ssw0rd',
    database:'dbrestapi'
});

conn.connect((err) => {
    if(err) throw err,
    console.log('mysql sudah terhubung');
});


module.exports = conn;
