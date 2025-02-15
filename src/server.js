import express from "express";
import config from "./configs/viewEngine";
import initWebRoutes from "./routes/web";
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

// config view engine
config(app);

// init web routes
initWebRoutes(app);

app.listen(PORT, () => {
    console.log("JWT backend listen port =" + PORT);
})