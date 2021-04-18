const convict = require("convict");

const config = convict({
    port: {
        doc: 'The port to bind.',
        format: 'port',
        default: 8080,
        env: 'PORT',
    },
    db: {
        host: {
            doc: 'Database host IP/Name',
            format: '*',
            default: 'localhost',
            env: 'DB_HOST',
        },
        name: {
            doc: 'Database name',
            format: String,
            default: 'node_dic',
            env: 'DB_NAME',
        },
        port: {
            doc: 'Database port',
            format: 'port',
            default: 27017,
            env: 'DB_PORT',
        },
        username: {
            doc: 'Database user name',
            format: '*',
            default: null,
            env: 'DB_USERNAME',
        },
        password: {
            doc: 'Database password',
            format: '*',
            default: null,
            env: 'DB_PASSWORD',
        },

    }
});

config.validate({allowed: 'strict'});

module.exports = {
    ...config.getProperties()
}
