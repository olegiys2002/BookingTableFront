import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IOrder } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  tableIndex = 0;
  orders$ : Observable<IOrder[]>;
  orders  : IOrder[]
  constructor(private orderService : OrderService) { }

  ngOnInit(): void 
  {
    this.orders$ = this.orderService.getAllOrders();
    this.orders$.subscribe(order=>console.log(order))
  }

  showTablesForOrder()
  {
    this.tableIndex = 2;
  }
  hideTablesForOrder()
  {
    this.tableIndex = 0;
  }
}
