const express = require("express")
const expressLayouts = require("express-ejs-layouts");
const indexRouter = require("./Router/index")

// Express Server
const app = express();
app.listen(1700);
console.log("Our sever is running...");


// Ejs
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "./layout/weblayout"); // Default Layout


// setting up the public
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", indexRouter);

