const http = require('http')
const url = require('url')
const PORT = 8000;

const server = http.createServer(function(req, res){
    //* Headers needs to be sent before sending the message or content.
    
    if(req.url === '/overview'){
        res.end("<h2>Hello, this is Overview</h2>")
    } else if(req.url === '/'){
        res.end("<h1>Hello, this is Homepage</h1>")
    } else if(req.url === '/product'){
        res.end("<h2>Hello, this is Product</h2>")
    } else {
        res.writeHead(404, {
            'content-type': 'text/html',
            'my-own-header': 'hello-bhai'
        })
        res.end("<h1>Error! Page not found :(</h1>")
    }
})

server.listen(PORT, 'localhost', function(){
    console.log(`Listening to requests on port : ${PORT}`);
})
