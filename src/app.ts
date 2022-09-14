import { sequelize } from "./db";

const express = require('express');

const app = express();


app.listen(8080,()=>{
    console.log(`App running at port no: 8080`);
    sequelize.authenticate().then(async()=>{
        console.log('Database connected!');

        try {
            await sequelize.sync({force:true});            
        } catch (error:any) {
            console.log(error.message);
        }
    }).catch((e:any)=>{
        console.log(e.message);
    })
})