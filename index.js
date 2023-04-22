const http = require('http')
const fs = require('fs')
const PORT = process.env.PORT
const hostname = 'localhost'
const home = fs.readFileSync('./index.html', 'utf-8')
const aboutus = fs.readFileSync('about.html', 'utf-8')
const service = fs.readFileSync('service.html', 'utf-8')
const server = http.createServer((req, res) => {
  if (req.url === '/home') {
    res.end(home)
  } else if (req.url === '/service') {
    res.end(service)
  } else if (req.url === '/aboutus') {
    res.end(aboutus)
  } else {
    res.end('Not Found 404 error')
  }
})
server.listen(PORT, () => {
  console.log(`the Web Site Is Hosted `)
})
