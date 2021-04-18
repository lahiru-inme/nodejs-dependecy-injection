const mongoose = require("mongoose");

const {host, username,password, name, port } = require("./index").db;

let connectionUrl = `mongodb://${host}:${port}/${name}`;

if(username && password ) connectionUrl = `mongodb://${username}:${password}@${host}:${port}/${name}`;

mongoose.connect(connectionUrl, {useNewUrlParser: true}).then(() => {
    console.log('Connect to database');
}).catch((err) => {
    console.log(`Database connection error : ${err}`);
});

module.exports = mongoose;


