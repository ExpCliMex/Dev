//Requires
const sqlite3 = require('sqlite3')
const serverConfig = require("../config/serverConfiguration.json")
//Class defnition
class DB {
    db = null;
    constructor() {
        this.db = new sqlite3.Database(serverConfig.dbFilePath, (err) => {
            if (err) {
                console.log('Could not connect to database', err)
            } else {
                console.log('Connected to database')
            }
        })
    }
    run(sql, params = []) {
        return new Promise((resolve, reject) => {
            this.db.run(sql, params, function (err) {
                if (err) {
                    console.log('Error running sql ' + sql)
                    console.log(err)
                    reject(err)
                } else {
                    resolve({ id: this.lastID })
                }
            })
        })
    }
    createTable() {
        const sql = `
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            full_name TEXT NOT NULL,
            user_name TEXT NOT NULL,
            password TEXT NOT NULL,
            phone TEXT NOT NULL,
            email TEXT NOT NULL)`
        return this.run(sql)
    }
}

class User {
    db = null
    constructor() {
        this.db = new DB()
    }

    async createTable() {
        return await this.db.createTable()
    }

    async create(full_name, user_name, pwd, phone, email) {
        return await this.db.run(
            `INSERT INTO users (full_name, user_name, password, phone, email)
            VALUES (?, ?, ?, ?, ?)`,
            [full_name, user_name, pwd, phone, email])
    }

}

module.exports.User = User