const expressRouter = require('express').Router;

const config = require('../config');

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
