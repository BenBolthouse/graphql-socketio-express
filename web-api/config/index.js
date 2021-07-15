/**
 * Container path: /usr/src/app/config/index.js
 * Project path: /config/index.js
 */

/**
 * Provides runtime access to environment variables. Export structure loosely
 * follows the same structure of the docker compose services to provide
 * application access to other services in the Docker swarm. In development the
 * environment variables are loaded onto `process.env` on runtime via a .env
 * file.
 *
 * See /.env/example.development.env for dev environment configuration.
 * See /package.json for dev, prod and test start scripts.
 */

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
