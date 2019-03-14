module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'fitness-app',
        user: process.env.DB_USER || 'fitness-app',
        password: process.env.DB_PASS || 'fitness-app',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './fitness-app.sqlite'

        }
    }
}