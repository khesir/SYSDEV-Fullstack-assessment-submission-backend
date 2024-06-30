require("dotenv").config();

const express = require("express");
const app = express();
// const cors = require("cors");

app.use(express.json()); 
// app.use(cors()); //enable cors for all requests

// Stage 1
app.get("/", (req,res) => {
    res.send("Javascript")
})

const userRouter = require('/routes/user')
app.use("/user", userRouter)


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});