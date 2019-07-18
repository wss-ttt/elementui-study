'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
	NODE_ENV: '"development"',
	HOST: '"https://www.easy-mock.com/mock/5d22e06ce6f04f21fc5b6be7"'
})
