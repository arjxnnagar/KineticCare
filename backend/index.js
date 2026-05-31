import e from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


import mainRouter from "./routes/main.routes.js"

const app = e();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(e.json());
app.use(cors({origin:"*"}));
app.use("/",mainRouter);


const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("DB Connected");
    }catch(err){
        console.error(err);
        console.log("Connection Failed");
    }
}
connectDB();



app.listen(port,()=>{
    console.log("Server listening on port:",port);
});

