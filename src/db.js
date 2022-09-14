"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
require('dotenv').config();
exports.sequelize = new sequelize_typescript_1.Sequelize('sequelize', 'postgres', 'saurabh99', {
    host: 'localhost',
    dialect: 'postgres',
    models: [__dirname + '/models']
});
