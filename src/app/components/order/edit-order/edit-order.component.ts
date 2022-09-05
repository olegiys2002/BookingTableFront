import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IOrder } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {

  order : IOrder =
  {
    id : 0,
    createdAt:new Date(),
    updatedAt:new Date,
    countOfPeople:0,
    dateOfReservation:new Date(),
    tables: [] 
  }
  constructor(private orderService : OrderService,private activatedRouter : ActivatedRoute,private router : Router) { }

  ngOnInit(): void 
  {
    this.activatedRouter.paramMap.subscribe({
      next:(params)=>
      {
        const id = params.get('id');
        if (id)
        {
          this.orderService.getOrder(id).subscribe(order=>this.order = order);
        }
      }
    })
  }

  editOrder()
  {

  }

  deleteOrder()
  {
    const id = this.order.id;
    this.orderService.deleteOrder(id.toString()).subscribe({
      next:(response) =>  this.router.navigate(['orders'])
    }); 
  }

}
