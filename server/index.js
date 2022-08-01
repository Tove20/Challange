const express = require('express')
const app = express()
const port = 5000
const arraySplit = require('../01/ArraySplit');
const findMissingElement = require('../02/FindMissingElement');
const sortingObjects = require('../03/SortingObjects');

app.get('/api', (req, res) => {
  res.json({arraySplit})
})

app.get ('/api2', (req, res) => {
  res.json({findMissingElement})
})

app.get ('/api3', (req, res) => {
  res.json({sortingObjects})
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})