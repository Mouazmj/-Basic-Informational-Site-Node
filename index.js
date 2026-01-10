const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    const path = ''
    switch(req.url) {
        case '/':
            path += 'index.html';
            break;
            case '/about':
                path += 'about.html';
                break;
                case '/contact-me':
                    path += 'contact.html'
    }
})