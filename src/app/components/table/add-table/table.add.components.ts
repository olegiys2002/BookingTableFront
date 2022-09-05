import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ITable } from "src/app/models/table";
import { TableService } from "src/app/services/table.service";

@Component({
    selector:"add-table-app",
    templateUrl:"./table.add.component.html"
})

export class AddTableComponent
{
    constructor(private tableService:TableService,private router:Router) {
        
        
    }
   public addTableRequest: ITable =
   {
        id :0,
        countOfSeats:1,
        number:0,
        createdAt: new Date(),
        updatedAt:new Date()

   }

   public addTable(){
    this.tableService.addTable(this.addTableRequest).subscribe({
        next:(table)=> {
            this.router.navigate(['tables']);
        }
    });
   }
}