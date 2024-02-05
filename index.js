const express = require("express")
const app = express()

const data = {
    name: "Professor",
    skills: ["IT","Math","Communication"],
    age: 35,
    numbers: [ 1, 1, 2, 2, 3, 3, 4, 4 ]
}
const error = {message: "This is an error message!"}

app.use("/", (req,res,next) => {
    console.log(("Request came in!"));
    next()
})

app.get("/data", (req,res) => {
    res.json(data)
})

app.get("/simulateError", (req,res) => {
    res.status(500).json(error)
})

app.listen(3000, ()=> {console.log("Backend running at port: 3000");})

//https://developer.mozilla.org/en-US/docs/Web/HTTP/Status