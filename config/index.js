// 配置信息
// 服务启动相关配置

const { env } = process;
module.exports = {
    host: env.HOST,
    port: env.PORT
};
