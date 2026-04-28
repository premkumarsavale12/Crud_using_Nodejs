
const mongoose = require("mongoose");

const simpleSchema = new mongoose.Schema({
    name: {

        type: String,
        required: true,

    },

    fatherName: {

        type: String,
        required: true,

    },

    motherName: {

        type: String,
        required: true,
    },

    city: {

        type: String,
        required: true,
    },

    address: {

        type: String,
        required: true,
    },

})
module.exports = mongoose.model("demo", simpleSchema)