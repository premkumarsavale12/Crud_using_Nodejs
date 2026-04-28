
const express = require("express");
const app = express();

const cors = require("cors");
const connectDb = require("./config/db");
const simpleRoute = require("../backend/routes/simpleRoute")
const HardRoute = require("./routes/hardRoute");
 


connectDb();

app.use(cors());

app.use(express.json());

app.use("/api/simple", simpleRoute);
app.use("/api/hard", HardRoute)


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));