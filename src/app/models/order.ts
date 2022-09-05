import { IEntity } from "./entity";
import { ITable } from "./table";

export interface IOrder extends IEntity
{
    countOfPeople:number
    dateOfReservation:Date
    tables:ITable[];
}