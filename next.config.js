require('dotenv').config()

module.exports = {
    env: {
        API_URL: process.env.API_URL,
        ADMIN_EMAIL: process.env.ADMIN_EMAIL,
        ADMIN_PASSWORD: process.env.ADMIN_PASSWORD
    }
}