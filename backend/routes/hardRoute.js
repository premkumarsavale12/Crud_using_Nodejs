const express = require("express");

const app = express();

const Hard = require("../module/hard");

// get method for all data 

app.get("/all", async (req, res) => {

    try {

        const data = await Hard.find();
        res.json(data);
    }

    catch (err) {

        res.status(500).json({ message: err.message });

    }

});


// get method for id data 

app.get("/:id", async (req, res) => {

    try {

        const data = await Hard.findById(req.params.id);
        res.json(data);
        if (!data) return res.status(404).json({ message: "Not Found" });

    }

    catch (err) {

        res.status(500).json({ message: err.message });



    }

});

// post ( add new data )

app.post("/add", async (req, res) => {

    try {

        const savedata = await Hard.create(req.body);
        res.status(201).json(savedata);
    }

    catch (err) {
        console.log(err);

    }
});

// put ( update , data )

app.put("/:id", async (req, res) => {

    try {

        const updateddata = await Hard.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updateddata) return res.status(404).json({ message: "Not Found" });
        res.json(updateddata);

    }

    catch (err) {

        console.log(err);
        res.status(404).json({ message: err.message });

    }

});

// delete ( delete  , data )

app.delete("/:id", async (req, res) => {


    try {

        const deletedata = await Hard.findByIdAndDelete(req.params.id);
        if (!deletedata) return res.status(404).json({ message: "Not Found" });
        res.json({ message: "Deleted SuccessFully..." });


    }

    catch (err) {

        res.status(500).json({ message: err.message });

    }

});

module.exports = app;

