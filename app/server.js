const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const apiRoutes = require("./routes");

// connecting db
require("./config/db").connect();

const app = express();

const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", apiRoutes());

app.listen(PORT, () => console.log(`app started on port ${PORT}`));
