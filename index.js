const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/submit', (req, res) => {
  const { firstname, lastname, email } = req.body;
  res.send(
    `Server received: First Name - ${firstname}, Last Name - ${lastname}, Email - ${email}`
  );
});

app.listen(3000);
