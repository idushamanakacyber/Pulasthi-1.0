const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.AIVE_IMG || "https://avatars.githubusercontent.com/u/127433800?v=4",
ALIVE_MSG: process.env.AIVE_MSG || "Hello, I am Pulasthi 1.0 WhatsApp bot I am alive now!",
};
