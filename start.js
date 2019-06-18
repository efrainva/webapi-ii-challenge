//server
const express = require('express');
const server = express();

const db = require('./data/db.js');

const allRouters = require('./Routers.js')

server.use(express.json());
server.use('/api/route',allRouters);

server.listen(9999, ()=>{
  console.log('\n * running server http://localhost:9999 * \n');
})
//GET
export default server;
//POST
