const http = require('http')

const server = http.createServer((req, res) => {
  console.log('request received')
  res.statusCode = 301
  res.setHeader('Location', 'https://www.baidu.com')
  res.end()
})

server.listen(3000, )