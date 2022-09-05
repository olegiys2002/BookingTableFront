import { IEntity } from "./entity";
import { ITable } from "./table";

export interface IOrderFormDTO 
{
    countOfPeople:number
    dateOfReservation:Date
    tablesId:Number[];
}