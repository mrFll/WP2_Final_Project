const mysql = require('promise-mysql');
const conf = {
    host: 'localhost',
    user: 'root',
    password: 'pa55',
    database: 'kaashaane'
};

class DbManager {

    constructor() {

    }


    async login(email, password) {

        var res = null;
        mysql.createConnection(conf)
        .then(function(conn){
            var result = conn.query('select * from person where email= "' + email + '" AND password= "' + password+ '"');
            conn.end();
            return result;
        }).then(function(rows){
            // Logs out a list of hobbits
            //console.log(rows);
            res = rows;
        });
        return res;
    };


    /**
     * insert new person to database
     * @param person
     * @returns {boolean}
     */
    insertNewPerson(person){
        let insertQ = "INSERT INTO person (first_name, last_name, email, phone, password) VALUES (? , ? , ? , ? , ? )";

        let values = [
            person.firstName ,
            person.lastName,
            person.email,
            person.phone,
            person.password
        ];
        /*
        this.connection.query(insertQ, values, (err, result)=>{
            if(err) throw err;
            console.log(result.affectedRows + " person is added");
        });
        */
        return true;
    }



}

//connection.end();

module.exports = DbManager;