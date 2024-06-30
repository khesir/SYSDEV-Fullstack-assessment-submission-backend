const db = require('../database')
class ProgLang{
    
    constructor(favorite){
        this.favorite = favorite;
    }

    create(){
        let sql = `INSERT INTO programming_languages`
        + `(favorites)`
        + `VALUES ('${this.favorite}')`
        return db.execute(sql)
    }

    static findAll(){
        let sql = `SELECT * FROM programming_languages`
        return db.execute(sql);
    }
}

module.exports = ProgLang