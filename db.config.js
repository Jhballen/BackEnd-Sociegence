const mongoose = require('mongoose');

class dbConnection {
    constructor () {
        this.connect();
    }

    async connect() {
        try {
            await mongoose.connect(
                'mongodb+srv://jhon123:1234jhon@socigence.gvnch.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
                {useNewUrlParser: true}
            );
            console.log("Se conecto")
        }catch(e) {
            console.error(e)
        }
    }
    
    
    
}
exports.dbConnection = new dbConnection;
