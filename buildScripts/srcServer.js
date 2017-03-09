import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console*/
/*
var express = require('express');
var path = require('path');
var open = require('open');
var port = 3000;
var app = express();
*/

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));


//Any request to the root route
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function(req,res){
  res.json([
    {"id": 1, "firstName":"Bob","lastName":"Smith","email":"dod@gmail.com"},
    {"id": 1, "firstName":"Charles","lastName":"Reed","email":"creed@gmail.com"},
    {"id": 1, "firstName":"Alanis","lastName":"Reese","email":"areese@gmail.com"}
  ]);
});

app.listen(port,function(err){
  if (err){
    console.log(err);
  }else{
    open('http://localhost:'+ port);
  }
});
