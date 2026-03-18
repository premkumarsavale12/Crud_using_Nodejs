const express = require("express");

const app = express();

const Simple = require("../module/simple")

// get all data  

app.get("/all", async (req, res) => {

    try {
        const data = await Simple.find();
        res.json(data);
    }

    catch (err) {

        res.status(500).json({ message: err.message });

    }
});
// get data by id 

app.get("/:id", async (req, res) => {

    try {

        const data = await Simple.findById(req.params.id);
        res.json(data);
        if (!data) return res.status(404).json({ message: "Not Found " });

    }
    catch (err) {

        res.status(500).json({ message: err.message });
    }

});

// post ( add new  data )

app.post("/add", async (req, res) => {
    try { 

        const savedata = await Simple.create(req.body);

        res.status(201).json(savedata);

    }
    catch (err) {
        console.log(err);
    }
});

// put (update , data ) 


app.put("/:id", async (req, res) => {
    try {

        const updateddata = await Simple.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updateddata) return res.status(404).json({ mesagae: "Not Found" });

        res.json(updateddata);

    }
    catch (err) {


        res.status(400).json({ message: err.message });

    }
});


app.delete("/:id", async (req, res) => {

    try {
        const deleteddata = await Simple.findByIdAndDelete(req.params.id);
        if (!deleteddata) return res.status(404).json({ message: "not Found" });
        res.json({ message: "Medicine Deleted SuccessFully " });

    }

    catch (err) {

        res.status(500).json({ message: err.message });
    }

})

module.exports = app;
