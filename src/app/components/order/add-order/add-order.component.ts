import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IOrder } from 'src/app/models/order';
import { IOrderFormDTO } from 'src/app/models/orderFormDTO';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  order : IOrderFormDTO = 
  {
    countOfPeople:0,
    dateOfReservation:new Date(),
    tablesId:this.orderService.getTables(),

  }

  constructor(private orderService : OrderService,private router:Router) 
  { 
    
  }

  ngOnInit(): void {

  }

  addOrder()
  {
    this.orderService.createOrder(this.order).subscribe({
      next: (response) => this.router.navigate(['orders'])
    });
  }

}
