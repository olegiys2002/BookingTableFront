import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { AddOrderComponent } from './components/order/add-order/add-order.component';
import { EditOrderComponent } from './components/order/edit-order/edit-order.component';
import { OrderComponent } from './components/order/order.component';
import { AddTableComponent } from './components/table/add-table/table.add.components';
import { EditTableComponent } from './components/table/edit-table/edit-table.component';
import { TableComponent } from './components/table/table.component';
import { TabletestComponent } from './components/table/tabletest/tabletest.component';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { EditUserComponent } from './components/user/edit-user/edit-user.component';
import { UserComponent } from './components/user/user.component';
import { Role } from './models/user';
import { AuthGuard } from './services/guards/authGuard.service';
import { RoleGuard } from './services/guards/roleGuard.service';


const routes: Routes =
[
  {path:'tables',component: TableComponent},
  {path:'tables/add',component:AddTableComponent},
  {path:'tables/edit/:id',component:EditTableComponent},
  {path:'users',component:UserComponent,canActivate:[AuthGuard,RoleGuard]},
  {path:'users/add',component:AddUserComponent},
  {path:'users/edit/:id',component:EditUserComponent},
  {path:'orders',component:OrderComponent},
  {path:'orders/edit/:id',component:EditOrderComponent},
  {path:'authentication/login',component:AuthenticationComponent},
  {path:'tables/order/add',component:AddOrderComponent},
  {path:'tables/testtable',component:TabletestComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
