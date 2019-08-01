const http = require('http')
const fs = require('fs')
const url = require('url')

const server = http.createServer(function(req, res){
    const pathname = url.parse(req.url, true).pathname;
        if(pathname == '/'){
                fs.readFile('./main.html', function(err, data) {
                    res.writeHead(200, {'content-type' :'text/html'})
                    res.end(data)
                })
            }
        else if(pathname == '/about'){
            fs.readFile('./about.html', function(err, data) {
                res.writeHead(200, {'content-type' :'text/html'})
                res.write(data)
                res.end(`<a href="http://localhost:8080">Go to home page</a>`)
            })
        }

        else if(pathname == '/login'){
            fs.readFile('./login.html', function(err, data) {
                res.writeHead(200, {'content-type' : 'text/html'})
                res.write(data)
                res.end(`<a href="http://localhost:8080">Go to home page</a>`)
            })
        }

        else if(pathname =='/profile') {
            fs.readFile('./profile.html', function(err, data) {
                res.writeHead(200, {'content-type' :'text/html'})
                res.write(data)
                res.end(`<a href="http://localhost:8080">Go to home page</a>`)
            })
        }
})

server.listen(8080, 'localhost', function(){
    console.log('server connected')
})