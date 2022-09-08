const express = require('express');
const morgan = require('morgan');
const path = require('path');
const axios = require('axios');
const expressStaticGzip = require('express-static-gzip');
const compression = require('compression');
require('dotenv').config();
let app = express ();


const API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe';
const api = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: process.env.AUTH,
  }
})
//Middleware
app.use(morgan('dev'));
app.use(expressStaticGzip(path.join(__dirname, '../dist')));
app.use(compression());

const port = process.env.PORT || 8080;

app.get('/api/*', (req, res) => {
  const url = req.url.replace('/api/', '/')
  console.log('Request url: ', url);
  api.get(url)
    .then(response => {
      res.status(200);
      res.send(response.data);
    })
    .catch(err => {
      console.log(err.data);
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