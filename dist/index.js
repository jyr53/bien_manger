"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const constants_1 = require("./config/constants");
const app = express();
app.use(express.json());
app.get("/", (req, res) => res.send("hello world"));
app.listen(constants_1.PORT, () => {
    console.log('Server is listenning on port ${PORT}');
});
