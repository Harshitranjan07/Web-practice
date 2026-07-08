const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./config/db");



console.log(process.env.PORT);
const PORT = process.env.PORT || 3000;

connectDB();

app.set("view engine","ejs")
app.use(express.json());
app.use(express.urlenclosed)

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});