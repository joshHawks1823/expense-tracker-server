const express = require("express");
const app = express();
const cors = require("cors");

// Middleware

app.use(express.json()); //req.body
app.use(cors());

// Routes 

// Register and login routers

app.use("/auth", require("./routes/auth"));


// dashboard

app.use("/dashboard", require("./routes/dashboard"))

app.listen(4000, () => {
  console.log("server is running on port 4000")
});

