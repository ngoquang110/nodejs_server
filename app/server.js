const express = require('express');
const pino = require('pino');

const app = express();

const logger = pino({
    level: 'info',
    timestamp: () => `,"time":"${new Date().toISOString()}"`
});

logger.info('hello elastic world');
logger.info('This is some great stuff');
logger.info('Some more entries for our logging');
logger.info('another line');
logger.info('This never stops');
logger.info('Logging logging all the way');
logger.info('Something');
logger.info('New line in remote and local');
logger.info('New feature from devops');
logger.info('Update database from devops');





app.listen(3000, function () {
    logger.info("app listening on port 3000!");
});
