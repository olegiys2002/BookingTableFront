import { IAvatar } from "./avatar"
import { IEntity } from "./entity"

export const enum Role {
    Admin = 'Admin',
    User = 'User',   
}


export interface IUser extends IEntity
{
    name:string
    role:string
    password:string
    email:string
    avatarFormDTO:IAvatar
    avatarId:number   
}