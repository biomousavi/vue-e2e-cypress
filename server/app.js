const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')
const chalk = require('chalk')
const history = require('connect-history-api-fallback')
const { MongoMemoryServer } = require('mongodb-memory-server')

const eventRouter = require('./routes/event')

MongoMemoryServer.create()
  .then((mongod) => {
    console.log(
      `MongoDB is up and running on: ${chalk.blueBright.underline(mongod.getUri())}`);
    mongoose.connect(mongod.getUri())
    mongoose.Promise = global.Promise

    const db = mongoose.connection
    db.on('error', console.error.bind(console, 'MongoDB connection error:'))

    const app = express()
    app.use(history())
    app.use(cors())
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(express.static(path.resolve(__dirname, 'dist/')))

    app.get('/', function (req, res) {
      res.sendFile(path.resolve(__dirname, 'dist/index.html'))
    })

    app.use('/api/event', eventRouter)

    const port = 8080

    db.once('open', function () {
      app.listen(port, () => {
        console.log(
          `The application is up and running on: ${chalk.cyan.underline(
            `http://localhost:${port}`
          )}`
        )
      })
    })
  })
  .catch((e) => {
    console.error(e)
  })
