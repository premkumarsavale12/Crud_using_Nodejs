
const express = require("express");
 const app = express();
  
 const cors = require("cors");
const connectDb = require("./config/db");
const simpleRoute = require("../backend/routes/simpleRoute")
   
 
  connectDb();
   
  app.use(cors());
   
  app.use(express.json());
   
   app.use("/api/simple", simpleRoute);
    
    const PORT = process.env.PORT || 5000 ;
     
     app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));