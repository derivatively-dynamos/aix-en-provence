const express = require('express');
const morgan = require('morgan');
let app = express ();

app.use(morgan('dev'));
app.use(express.static(__dirname));

const port = process.env.PORT || 8010;

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})