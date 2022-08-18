require('dotenv').config();

import express from "express";
import { PORT } from "./config/constants";
import { router } from "./routes/recipe";

const app = express();
app.use(express.json());

app.get("/", (req, res) => res.send("hello world salut bande de nase"));
app.get("/recipe", router);
app.get("/recipe/id", router);

app.listen(PORT, () => {
    console.log("Server is listenning on port" + PORT);
});