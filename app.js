const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(express.static(path.resolve(__dirname, './public')))
app.use(cors())

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public', 'index.html'))
})

const PORT = process.env.PORT || 4002

const start = async () => {
  try {
    await app.listen(PORT, console.log(`Listening ${PORT} port ...`))
  } catch (err) {
    console.log(err)
  }
}

start()
