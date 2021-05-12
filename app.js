const express = require('express');
const app = express();

const productRoutes = require('./routes/products');
const orderRoutes = require('./routes/orders');

app.use('/orders', orderRoutes);
app.use('/products', productRoutes);

module.exports = app;