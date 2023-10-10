const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');
const User = require('./models/user');

const app = express();

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
  .connect(
    'mongodb+srv://daocongly0510:wPXtYKC8vaT0GyFt@congly.l23z7te.mongodb.net/shop?retryWrites=true&w=majority'
  )
  .then(result => {
    app.listen(PORT, () => console.log("Server is running on port 3000"));
  })
  .catch(err => {
    console.log(err);
  });
