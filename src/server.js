import express from "express";
import "dotenv/config";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const app = express();

app.use(bodyParser.json());

// Database configuration
const dbUrl = process.env.DATABASE_URL;
mongoose
.connect(dbUrl, {
    useNewUrlParser: true, useUnifiedTopology: true 
})
.then(() =>{
    console.log("Database connected succesfully");
});
// server configuration
const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
});

export default app;