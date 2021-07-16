module.exports = {
    env: process.env.NODE_ENV,
    domain: process.env.DOMAIN,
    name: process.env.NAME,
    port: process.env.PORT,
    version: process.env.VERSION,
    db: {
        database: process.env.DB_DATABASE,
        host: process.env.DB_HOST,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
    }
};
