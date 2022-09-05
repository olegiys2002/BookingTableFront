import { Component, Input, OnInit } from '@angular/core';
import { ITable } from 'src/app/models/table';

@Component({
  selector: 'app-tables-for-order',
  templateUrl: './tables-for-order.component.html',
  styleUrls: ['./tables-for-order.component.css']
})
export class TablesForOrderComponent implements OnInit {

  @Input() tables : ITable[];
  constructor() { }

  ngOnInit(): void
  {
      
  }

}
