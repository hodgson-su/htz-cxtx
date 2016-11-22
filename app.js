let express = require('express')
let path = require('path')

let app = express()

//开发环境
app.use('/dev', express.static(__dirname + '/views'))
app.use('/dev/assets', express.static(__dirname + '/assets'))

//部署环境
   app.use('/', express.static(__dirname + '/dist/views'))
   app.use('/assets', express.static(__dirname + '/dist/assets'))

app.listen(16082, () => {
  console.log('server start at 16082')
})

module.exports = app
