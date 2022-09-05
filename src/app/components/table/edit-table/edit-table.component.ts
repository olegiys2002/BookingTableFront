import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITable } from 'src/app/models/table';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-edit-table',
  templateUrl: './edit-table.component.html',
  styleUrls: ['./edit-table.component.css']
})
export class EditTableComponent implements OnInit {

  tableDetails:ITable =
  {
    id :0,
    countOfSeats:1,
    number:0,
    createdAt: new Date(),
    updatedAt:new Date()
  }

  constructor(private route:ActivatedRoute,private tableService : TableService,private router : Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
        const id = params.get('id');
        if(id){
          this.tableService.getTable(id).subscribe({
            next: (response) => {
            this.tableDetails = response;
            }
          });
        }
      }
    })
  }

  public updateTable() 
  {
    this.tableService.updateTable(this.tableDetails).subscribe({
      next: (response) => {
        console.log(response);
      }
    });
  }
  public deleteTable()
  {
    this.tableService.deleteTable(this.tableDetails.id.toString()).subscribe({
      next: (response) => { this.router.navigate(['tables']);}
    });
  }

}
