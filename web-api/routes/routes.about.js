/**
 * Container path: /usr/src/app/routes/routes.about.js
 * Project path: /routes/routes.about.js
 */

const expressRouter = require('express').Router;

const config = require('../config');

/**
 * Provides an application route to get details about the service.
 */
const router = expressRouter();

const configClone = { ...config };

if (!['development', 'test', null].includes(configClone.env)) {
    delete configClone.db.password;
    delete configClone.db.user;
}

router.get('/about', (req, res) => {
    res.status(200).json({
        config: configClone
    });
});

module.exports = router;
