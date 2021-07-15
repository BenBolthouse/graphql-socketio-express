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
    domain: process.env.DOMAIN,
    name: process.env.NAME,
    port: process.env.PORT,
    version: process.env.VERSION,
};
