import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { ViewTaskComponent } from './view-task/view-task.component';

@NgModule({
   declarations: [
      AppComponent,
      ListProductsComponent,
      ViewProductComponent,
      ListTasksComponent,
      ViewTaskComponent,
      ListTasksComponent,
      ViewTaskComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
