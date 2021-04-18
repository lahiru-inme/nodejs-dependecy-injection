const Server = require("./server");
const config = require("./config");

const server = new Server();
server.run(config.port);
