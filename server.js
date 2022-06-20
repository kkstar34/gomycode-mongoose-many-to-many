import express from "express";
import Database from './database/db.js';
import { routes } from "./routes/routes.js";
import bodyParser from "body-parser";

const app = express();
const PORT = 4000;

Database.connect(); // connect to database
app.use(bodyParser.json());
app.use(routes)
app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});