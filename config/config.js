module.exports = {
    dev: {
        port: process.env.port || 4000,
        db: process.env.DB_LINK || "mongodb://localhost/com-base-test"
    },
    prod: {
        //TODO !

    }
}