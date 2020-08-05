const express = require("express")

const app = express()

//home route
app.get("/", (req, res)=>{
    res.send("you have reached me")
})

//about route
app.get("/about", (req, res)=>{
    res.send("let's see this other express route")
})

// [GET]
app.get("/:input", (req, res)=>{
    console.log(req.params)
})

app.listen(8080, ()=>{
    console.log("can you hear me now?")
})
app.get('/greet/:name', (req, res)=>{
    res.send(`hello ${req.params.first} ${req.params.last}`)
})
app.get('/mulitply:x:y', (req, res)=>{
    res.send(`the answe ${req.params.x*req.params.y}`)
})
app.get('/add/:x:y', (req, res)=>{
    res.send(`the answer ${req.params.x + +req.params.last}`)
})
app.get('/guerystring', (req, res)=>{
    let printout =''
    for (let key in req.query) {
        printOut +=`${key}: ${req.query[key]}<br />`
    }
    res.send(`herse what they sent: ${printout}`)
})
//for (let key in obj) {
    //let value = obj[key];
    //console.log(value);
  //}