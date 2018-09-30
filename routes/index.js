const routesHelloHapi = require('./hello-hapi');
const routeShops = require('./shops');
const routeOrders = require('./orders');

module.exports = [
    ...routesHelloHapi,
    ...routeShops,
    ...routeOrders
];
