import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { ITable } from "src/app/models/table";
import { OrderService } from "src/app/services/order.service";
import { TableService } from "src/app/services/table.service";

@Component({
    selector:"app-table-component",
    templateUrl:"./table.component.html",
})

export class TableComponent implements OnInit
{
 
  tables$ : Observable<ITable[]>
  tables : number[] = []

  constructor(private tableService:TableService,private orderService:OrderService,private router : Router)
  {
    
  }

  filterCheckboxes(event : any)
  {
    let table = event.target.checked;
    let value =event.target.value
    if (table)
    {
      console.log(value);
      this.tables.push(value);
    }
    else{
    let index = this.tables.indexOf(value);
      if (index!=-1)
      {
        this.tables.splice(index,1);
      }
    }
    console.log(this.tables);
  }
  ngOnInit(): void 
  {
    this.tables$ = this.tableService.getTables();
  }
  getTablesIds()
  {
    this.orderService.setTables(this.tables);
    this.router.navigate(['tables/order/add']);

  }
}