const express = require("express")
const app = express()

const data = {
    name: "Professor",
    skills: ["IT","Math","Communication"],
    age: 35
}
const error = "This is an error message!"

app.use("/", (req,res,next) => {
    console.log(("Request came in!"));
    next()
})

app.get("/:number", (req,res) => {
    const number = req.params.number
    if (number % 2 == 0) {
        res.json(data)
    }
    else {
        res.status(400).json({"error": error})
    }
})

app.listen(3001, ()=> {console.log("Backend running at port: 3001");})