// const Joi = require('joi');

const GROUP_NAME = 'shops';
const models = require('../models');
const { paginationDefine } = require('../utils/router-helper');

module.exports = [
    {
        method: 'GET',
        path: `/${GROUP_NAME}`,
        handler: async (request, reply) => {
            // reply();
            // 通过 await 来异步查取数据
            const { rows: results, count: totalCount } = await models.shops.findAndCountAll({
                attributes: [
                    'id',
                    'name'
                ],
                limit: request.query.limit,
                offset: (request.query.page - 1) * request.query.limit
            });
            // 开启分页的插件，返回的数据结构里，需要带上 result 与 totalCount 两个字段
            reply({ results, totalCount });
        },
        config: {
            tags: ['api', GROUP_NAME],
            description: '获取店铺列表',
            validate: {
                query: {
                    // limit: Joi.number().integer().min(1).default(10)
                    //     .description('每页的条目数'),
                    // page: Joi.number().integer().min(1).default(1)
                    //     .description('页码数')
                    ...paginationDefine
                }
            }
        }
    },
    {
        method: 'GET',
        path: `/${GROUP_NAME}/{shopId}/goods`,
        handler: async (request, reply) => {
            reply();
        },
        config: {
            tags: ['api', GROUP_NAME],
            description: '获取店铺是商品列表'
        }
    }
];
