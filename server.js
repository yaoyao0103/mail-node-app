const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const MailRoutes = require("./routes/mailRoutes");

app.use(express.urlencoded({ extended: false }));
const PORT = process.env.PORT || 3001;
const env = process.env.NODE_ENV || 'production';

app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});


app.use(MailRoutes);

app.listen(PORT, () => console.log('Server Running...'));

module.exports = app;
