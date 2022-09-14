import { Table, Column, Model, DataType, HasMany, AllowNull, AutoIncrement, PrimaryKey, Unique } from "sequelize-typescript";

import User from "./user.model";

export interface customerI{
    name: string;
    website: string;
    address: string;
}

@Table({
    tableName:"customers",
    timestamps:true
})

export default class Customers extends Model implements customerI{


    @AutoIncrement
    @PrimaryKey
    @AllowNull(false)
    @Column
    id?:number;

    @AllowNull(false)
    @Unique
    @Column
    name!: string;
    
    @AllowNull(false)
    @Column
    website!: string;

    @Column
    address!: string;

    @HasMany(()=>User)
    users!: User[];
}