import express from "express";
import config from "./configs/viewEngine";
import initWebRoutes from "./routes/web";
require("dotenv").config();
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 3000;

// config view engine
config(app);

// config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// init web routes
initWebRoutes(app);

app.listen(PORT, () => {
    console.log("JWT backend listen port =" + PORT);
})