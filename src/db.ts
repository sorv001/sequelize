import {Sequelize} from 'sequelize-typescript';



require('dotenv').config();

export const sequelize = new Sequelize('sequelize', 'postgres', 'saurabh99',{
        host: 'localhost',
        dialect: 'postgres',
        models: [__dirname + '/models']
})