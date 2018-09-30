module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: (request, reply) => {
            reply('hapiwwwwwwww');
        },
        config: {
            tags: ['api'],
            description: '测试hello-hapi'
        }
    }
];
