import e from "express";
                
const mainRouter = e.Router();                                                    
mainRouter.get("/",(req,res)=>{
        
    res.send("Server Live and is being run");
})
export default mainRouter;