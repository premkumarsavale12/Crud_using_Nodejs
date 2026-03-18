const mongoose = require("mongoose");

const connectDb = async () => {

    try {

       await mongoose.connect("mongodb+srv://premsavale112:prem@cluster0.5vvteao.mongodb.net/Start?appName=Cluster0")
        console.log("Database Connected ");

    }
    catch (err) {


        console.log(err);

        process.exit(1);

    }

};

module.exports = connectDb;    