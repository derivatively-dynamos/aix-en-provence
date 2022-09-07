const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
require('dotenv').config();
let app = express ();


const API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe';
const api = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: process.env.AUTH,
  }
})

app.use(morgan('dev'));
app.use(express.static(__dirname));

const port = process.env.PORT || 8010;

app.get('/api/*', (req, res) => {
  const url = req.url.replace('/api/', '/')
  api.get(url)
    .then(response => {
      res.status(200);
      res.send(response.data);
    })
    .catch(err => {
      console.log(err);
      res.status(400);
      res.send('Error')
    })
})
app.post('/api/*', (req, res) => {
  const url = req.url.replace('/api/', '/')
  api.post(url)
    .then(response => {
      res.status(200);
      res.send(response.data);
    })
    .catch(err => {
      console.log(err);
      res.status(400);
      res.send('Error')
    })
})
app.put('/api/*', (req, res) => {
  const url = req.url.replace('/api/', '/')
  api.put(url)
    .then(response => {
      res.status(200);
      res.send(response.data);
    })
    .catch(err => {
      console.log(err);
      res.status(400);
      res.send('Error')
    })
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})