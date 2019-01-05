require('env2')('./.env'); // 用来读取.env配置文件
const Hapi = require('hapi');
const config = require('./config');
const routes = require('./routes/');
// // 引入自定义的 hapi-swagger  插件配置
const pluginHapiSwagger = require('./plugins/hapi-swagger');
const pluginHapiPagination = require('./plugins/hapi-pagination');

const server = new Hapi.Server();

// 配置服务器启动host与端口
server.connection({
    port: config.port,
    host: config.host
});
const init = async() => {
    await server.register([
        // 为系统使用 hapi-swagger
        ...pluginHapiSwagger,
        pluginHapiPagination
    ]);
    server.route([
        // 创建一个简单的hello hapi接口
        ...routes
    ]);

    // 启动服务
    await server.start();
    console.log(`Server running at:${server.info.uri}`);
};

init();