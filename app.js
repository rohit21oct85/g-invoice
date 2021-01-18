const dotenv  = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("morgan");
const Routes = require("./routes/index.js");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

app.use(cors());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    next();
  });
app.use(logger('dev'));

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
mongoose.connection.on('error', function(err) {
    console.log('Error: Could not connect to MongoDB.');
});


// login
app.use("/api/v1/auth", Routes.authRoutes);
app.use("/api/v1/users", Routes.userRoutes);
app.use("/api/v1/coustomers", Routes.coustomerRoutes);
app.use("/api/v1/items", Routes.itemRoutes);
app.use("/api/v1/units", Routes.unitRoutes);
app.use("/api/v1/payment-terms", Routes.paymentRoutes);
app.use("/api/v1/taxes", Routes.taxRoutes);
app.use("/api/v1/taxes", Routes.taxRoutes);
app.use("/api/v1/transaction", Routes.transactionRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'client','build','index.html'));
  });
}


app.listen(process.env.PORT, function(){
    console.log('listening on port ' + process.env.PORT);
});
