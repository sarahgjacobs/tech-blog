const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");

// Sets up express app
const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");