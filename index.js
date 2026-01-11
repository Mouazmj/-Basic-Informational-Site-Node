const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    let path = './views'
    switch(req.url) {
        case '/':
            path += '/index.html';
            break;
            case '/about':
                path += '/about.html';
                break;
                case '/contact-me':
                    path += '/contact-me.html'
                    break;
                    default:
                        path += '/404.html'
                        break;
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            res.statusCode = 404
            res.end('File not found')
            console.log(err)
        } else {
            res.statusCode = 200
            res.end(data)
        }
    })
})

server.listen(8080, 'localhost', () => {
    console.log('Server running on port 8080')
})