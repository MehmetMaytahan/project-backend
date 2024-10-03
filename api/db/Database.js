const mongoose = require("mongoose")

let instance = null
class Database {
    constructor() {
        if (!instance) {
            instance = this
        }

        return instance
    }

    async connect(options) {
        try {

            let db = await mongoose.connect(options.CONNECTION_STRING, )
            this.mongoConnection = db

            console.log("db connected")
        } catch (error) {
            console.log(error)
            process.exit(1)
        }
    }
}

module.exports = Database