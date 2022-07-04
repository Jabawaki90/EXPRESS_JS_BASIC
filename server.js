const express = require('express')
const app = express()

app.get('/', (request, response )=>{
    console.log(request)
    response.send("helloWorld")
})

app.get('/contact', (req,res)=>{
    res.send('<h1>Here my contact section : ashraf.chzm@gmail.com</h1>')
})

app.get('/signup', (req,res)=>{
    res.send('<h2>Sign up now</h2>')
})

app.get('/about', (req, res)=>{
    res.send('<h1>My name is Ashraf , this is my first attempt to build server using node.js, first big step in my journey to be a FullStack web developer!</h1>')
})

app.listen('3000', ()=> console.log('Welcome to my server'))
