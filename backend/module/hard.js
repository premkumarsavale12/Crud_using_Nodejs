
const mongoose = require('mongoose');

const hardSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,

    },

    lastname: {
        type: String,
        required: true,
    }

});

module.exports  = mongoose.model("hard", hardSchema);
 
