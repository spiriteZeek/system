import http from 'node:http'
import fs from 'node:fs'

const server = http.createServer((req, res) => {
  let fileBase64 = ''
  
  if (req.method.toLowerCase() === 'post') {
    console.log(req.method)
    req.on('data', (chunk) => {
      fileBase64 += chunk.toString()
    })
    req.on('end', () => {
      const buf = Buffer.from(JSON.parse(fileBase64).file, 'base64')
      fs.writeFileSync('test.png', buf)
    })
  }

  res.writeHead(200, {
    token: '213zsdxf',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'zgy,content-type',
    'Access-Control-Allow-Methods': 'PUT'
  })
  res.end('hello')
})

server.listen(8080, () => {
  console.log('server is listening to http://localhost:8080')
})
