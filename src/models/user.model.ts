import { AllowNull, AutoIncrement, BelongsTo, Column, ForeignKey, Model, NotEmpty, PrimaryKey, Table } from "sequelize-typescript";
import Customers from "./customer.model";
import Roles from "./roles.model";

export interface UserI{
    id?: number|null;
    firstName: string;
    middleName?: string|null;
    lastName: string;
    email: string;
    phone: number;
    address: string;
}

@Table({
    tableName: "users",
    timestamps:true 
})

export default class User extends Model implements UserI{

    @AutoIncrement
    @AllowNull(false)
    @PrimaryKey
    @Column
    id?:number;

    @AllowNull(false)
    @NotEmpty
    @Column
    firstName!: string;
    
    @AllowNull(false)
    @NotEmpty
    @Column
    middleName!: string;
    
    @AllowNull(false)
    @NotEmpty
    @Column
    lastName!: string;
    
    @AllowNull(false)
    @NotEmpty
    @Column
    email!: string;
    
    @AllowNull(false)
    @NotEmpty
    @Column
    phone!: number

    @AllowNull(false)
    @NotEmpty
    @Column
    address!: string;
    
    @ForeignKey(()=>Customers)
    @Column
    customerId!:number

    @BelongsTo(()=>Customers)
    customer!:Customers;

    @ForeignKey(()=>Roles)
    @Column
    roleKey!:number

    @BelongsTo(()=>Roles)
    role!:Roles

}