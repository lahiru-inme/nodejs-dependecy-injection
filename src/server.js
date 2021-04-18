const express = require("express");
const {setup } = require("./config/di-register");
setup();
const router = require("./routes/index");


class Server {
    constructor() {
        this.app = express();
        this.setup();
    }


    setup() {
        this.app.use(express.json());
        this.app.use("/", router);
    }

    run(port) {
        this.server = this.app.listen(port, () => {
            console.log(`server running on port: ${port}`);
        });
    }

    stop(done) {
       this.server.close(done);
    }
}

module.exports = Server;
