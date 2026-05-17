import e from "express";
import cors from "cors";
import bodyParser from "body-parser";

import mainRouter from "./routes/main.routes.js"

const app = e();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(e.json());
app.use(cors({origin:"*"}));
app.use("/",mainRouter);

app.listen(port,()=>{
    console.log("Server listening on port:",port);
    });

