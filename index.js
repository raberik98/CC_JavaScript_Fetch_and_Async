const express = require("express")
const app = express()

const data = {
    message: "Itt a liszted tesám",
    item: "liszt"
}
const error = {message: "Bocs tesám nincs lisztem!"}

app.use("/", (req,res,next) => {
    console.log(("Request came in!"));
    next()
})

app.get("/", (req,res) => {
    res.json(data)
})

app.get("/simulateError", (req,res) => {
    res.status(500).json(error)
})

app.get("/404", (req,res) => {
    res.status(404).json({message: "404"})
})
app.listen(3000, ()=> {console.log("Backend running at port: 3000");})

//https://developer.mozilla.org/en-US/docs/Web/HTTP/Status