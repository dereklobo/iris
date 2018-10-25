require('dotenv').config();

module.exports = {
    WitToken:process.env.witToken,
    SlackToken:process.env.slackToken,
    slackLogLevel:'verbose'
};