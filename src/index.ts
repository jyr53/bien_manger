require('dotenv').config();
import cors from "cors";
import express from "express";
import { PORT } from "./config/constants";
import { router } from "./routes/recipe";
import { userRouter } from "./routes/utilisateur"
const app = express();
const alowedOrigins = ['http://localhost:4000'];

const options: cors.CorsOptions = {
    origin: alowedOrigins
};
//app.use(path,(req,res,next));
app.use(express.json());
//app.use('/static',express.static(join))
app.get("/", (req, res) => res.send("hello world salut bande de nase"));
//route des recettes
app.get("/recipe", router);
app.get("/recipe/show/:id", router);
app.post("/recipe/add", router);
app.post("/recipe/up/:id", router);
app.post("/recipe/del/:id", router);

//routes d'utilisateur
app.get("/user", userRouter);
app.get("/user/show/:id", userRouter);
app.post("/user/add", userRouter);
app.post("/user/up/:id", userRouter);
app.post("/user/del/:id", userRouter);




app.listen(PORT, () => {
    console.log("Server is listenning on port" + PORT);
});