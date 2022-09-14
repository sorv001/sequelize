import { Table, Column, Model, DataType, HasMany, AutoIncrement, NotEmpty, PrimaryKey, AllowNull } from "sequelize-typescript";

import User, { UserI } from "./user.model";

interface rolesI{
    id?: number|null;
    role: string;
    description: string;
}

@Table({
    tableName:'Roles',
    timestamps:true
})

export default class Roles extends Model implements rolesI{

    @AutoIncrement
    @PrimaryKey
    @AllowNull(false)
    @Column
    id?:number;

    @AllowNull(false)
    @Column
    role!: string;
    
    @AllowNull(false)
    @Column
    description!: string;

    @HasMany(()=>User)
    user!:User[];

}
