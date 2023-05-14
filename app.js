const mongoose = require("mongoose");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cookieParser = require('cookie-parser');
const cors = require('cors');

dotenv.config({ path: "./config.env" });

require("./db/conn");
app.use(express.json());
app.use(cookieParser());
// The express.json() function is a built-in middleware function in Express.
// It parses incoming requests with JSON payloads and is based on body-parser.

// cors error
app.use(cors());
app.use(require("./router/auth")); // router files linking
app.use(require("./router/trip"));
app.use(require("./router/adminauth"));
app.use(require("./router/agent"));
app.use(require("./router/vehicle"));

const PORT = process.env.PORT || 6010;

app.listen(PORT, () => {
  console.log(`shreya sharma hello ${PORT} `);
});
