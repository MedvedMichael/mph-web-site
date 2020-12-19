require('dotenv').config()

module.exports = {
    env: {
        API_URL: process.env.API_URL,
        ADMIN_EMAIL: process.env.ADMIN_EMAIL,
        ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
        'type': process.env.type,
        "project_id": process.env["project_id"],
        "private_key_id": process.env["private_key_id"],
        "private_key": process.env["private_key"].replace(/\\n/g, "\n"),
        "client_email": process.env["client_email"],
        "client_id": process.env["client_id"],
        "auth_uri": process.env["auth_uri"],
        "token_uri": process.env["token_uri"],
        "auth_provider_x509_cert_url": process.env["auth_provider_x509_cert_url"],
        "client_x509_cert_url": process.env["client_x509_cert_url"],
        IMAGE_API_KEY: process.env.IMAGE_API_KEY,
        SECRET_WORD: process.env.SECRET_WORD,
        IMAGE_HOSTING_KEY: process.env.IMAGE_HOSTING_KEY
    }, 
    webpack: (config, {
        isServer, webpack
    }) => {
        // Fixes npm packages that depend on `fs` module
        if (!isServer) {
            config.node = {
                fs: 'empty'
            }
        }
        config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))

        return config
    }
}