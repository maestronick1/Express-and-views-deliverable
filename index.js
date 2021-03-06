  
const express = require('express')
const app = express()

// tell express that we're going to use
// ejs as the view engine
app.set('view engine', 'ejs')

// home route!
app.get('/', (req, res)=>{
    // express will look inside views folder by default for an ejs file with this name
    res.render('index', {name: "Sterling Archer", age: 35}) 
})

// about route
app.get('/about', (req, res)=>{
    res.render('about', {fave: ['music', 13, 'SEI']})
    // res.sendFile(`${__dirname}/views/about.html`)
    // res.send('Some stuff about me will go here.')
})

// blog route
app.get('/blog', (req, res)=>{
    res.render('blog-directory')
    // res.sendFile(`${__dirname}/views/blog-directory.html`)
    // res.send("A directory of all my blog posts will go here.")
})

app.listen(8000)