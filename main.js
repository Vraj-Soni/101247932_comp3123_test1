let http = require('http') // this is the core module becsuse we haven't install anything 
let student = require("./student")
let 

const SERVER_PORT = 8080
let server = http.createServer((req, res) => {
    // console.log(req)
    if(req.url == '/'){
        res.write("<h2> Welcome to NodeJs server example</h2>")
        res.end()
    }

    if(req.url == '/name'){
        res.write("<h3>My name is Vraj Soni</h3>")
        res.end()
    }
    if(req.url == '/student'){
        // convert JS object to JSON string:-
        let s = JSON.stringify(student)
        res.write(student)
        res.end()
    }
})

server.listen(SERVER_PORT)
console.log("Server running at port http://localhost:" + SERVER_PORT)