import mongoose from "mongoose";
const DbServer = "mongodb+srv://kkstar34:Kkstar34*@cluster0.slfys.mongodb.net/baroland?retryWrites=true&w=majority"
class Database {
    constructor(){

    }

    static connect() {
        mongoose.connect(DbServer)
        .then(() => console.log("Database connected"))
        .catch(err => console.log("Error connecting" + err.message))
    }
}

export default Database;