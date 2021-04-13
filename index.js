const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv/config");

// Import routes
const appetizersRoute = require("./routes/appetizers")

// Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION, 
    {useNewUrlParser: true,  useUnifiedTopology: true}
)
.then(() => {
    app.listen(3000, () => { 
            console.log("Connected to DB.")
            console.log("Server has started."); 
        }
    );
});

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Home route
app.get("/", (req, res) => {
    res.send("Home of Food Ordering API");
});

// Appetizers route
app.use('/appetizers', appetizersRoute);