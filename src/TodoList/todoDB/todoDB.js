const mysql = require('mysql')
db = mysql.createConnection({
host: "localhost",
user: "root",
password: "password",
database:"todolistdb" 
})

// db.query("SELECT * FROM todos", (err,result)=>{
//     if(err) console.log(err);
//     else console.log(result);
// })

module.exports = db;


//node src/TodoList/todoDB/todoDB.js