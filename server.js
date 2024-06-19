const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());

//connection to mongodb
mongoose.connect('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.log(err));


app.get('/', (req, res) => {
  res.json({message: "Welcome to DressStore application."});
});

//start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);