const express = require("express");
const cors = require('cors');
const app = express();
const mongoose = require("mongoose");

const routes = require("./Routes/Routes");

app.use(express.json({ extended: true }));

var bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 5000;
app.listen(PORT,  () => {
    console.log("Server started on Port " + PORT + ".");
});

mongoose.connect("mongodb+srv://saadi_26:saadi2612@training.d4jd37f.mongodb.net/constructionERP", {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Database Connection Successful");
})
.catch(err => {
    console.log(err.message);
});


app.use(cors({
    origin: ["http://localhost:3000"],
    method: ["GET", "POST"],
    credentials: true,
})
);

app.use(express.json());
app.use("/", routes);
