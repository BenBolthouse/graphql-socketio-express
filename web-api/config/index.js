module.exports = {
    env: process.env.NODE_ENV,
    domain: process.env.DOMAIN,
    name: process.env.WEB_API__NAME,
    port: process.env.WEB_API__PORT,
    version: process.env.WEB_API__VERSION,
    db: {
        host: process.env.DB__NAME,
        port: process.env.DB__PORT,
        database: process.env.POSTGRES_DB,
        password: process.env.POSTGRES_PASSWORD,
        username: process.env.POSTGRES_USER,
    }
};
