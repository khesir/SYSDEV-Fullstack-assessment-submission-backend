const db = require('../database')
class User{
    
    constructor(first_name, last_name, email, avatar){
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.avatar = avatar
    }

    create(){
        let sql = `INSERT INTO user`
        + `(first_name, last_name, email, avatar)`
        + `VALUES ('${this.first_name}','${this.last_name}','${this.email}','${this.avatar}')`
        return db.execute(sql)
    }

    static findAll(){
        let sql = `SELECT * FROM user`
        return db.execute(sql);
    }
}

module.exports = User