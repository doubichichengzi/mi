module.exports = {
    devServer: {
        host: "localhost",
        port: 8080,
        proxy: {
            '/dbapi': {
                target: "https://db.topcdb.com",
                //  chageOrigin: false,是否将主机头 改为目标的url
                chageOrigin: true,
                pathRewrite: {//路径 重写
                    "dbapi": '',
                }
            },

        }
    }
}