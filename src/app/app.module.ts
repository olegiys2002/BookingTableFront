import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './components/table/table.component';
import { AddTableComponent } from './components/table/add-table/table.add.components';
import { EditTableComponent } from './components/table/edit-table/edit-table.component';
import { UserComponent } from './components/user/user.component';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { EditUserComponent } from './components/user/edit-user/edit-user.component';
import { OrderComponent } from './components/order/order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { JwtModule } from '@auth0/angular-jwt';
import { HomeComponent } from './components/home/home.component';
import { AddOrderComponent } from './components/order/add-order/add-order.component';
import { EditOrderComponent } from './components/order/edit-order/edit-order.component';
import { MatSliderModule } from '@angular/material/slider';
import { TabletestComponent } from './components/table/tabletest/tabletest.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { TablesForOrderComponent } from './components/order/tables-for-order/tables-for-order.component';
import { OnlineAssistantComponent } from './components/online-assistant/online-assistant.component';
import { NgChartsModule } from 'ng2-charts';

export function tokenGetter()
{
  return localStorage.getItem('jwt');
}
@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    AddTableComponent,
    EditTableComponent,
    UserComponent,
    AddUserComponent,
    EditUserComponent,
    OrderComponent,
    AuthenticationComponent,
    HomeComponent,
    AddOrderComponent,
    EditOrderComponent,
    TabletestComponent,
    TablesForOrderComponent,
    OnlineAssistantComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    NgChartsModule,
    JwtModule.forRoot({
      config:{
        tokenGetter:tokenGetter,
        allowedDomains:["localhost:7053"],
        disallowedRoutes:[]
      }
    }),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
