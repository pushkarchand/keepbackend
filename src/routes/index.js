const userRoutes=require("./user-routes");
const authRoutes=require("./auth-routes");
const storeRoutes=require('./store-routes');
const uploadRoutes=require('./upload-routes');
const express = require('express');
module.exports = (app) => {
    app.use('/user',userRoutes);
    app.use('/store',storeRoutes);
    app.use('/auth',authRoutes);
    app.use('/upload',uploadRoutes);
    app.use('/uploads', express.static('uploads'));
};

