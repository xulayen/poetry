
const config = require('../../config/index')

const lodash=require('lodash');

const Promise = require('./generator');

//不改变原始对象结构
var apis=lodash.cloneDeep(config.HttpApi);

module.exports = new Promise.default(apis);
