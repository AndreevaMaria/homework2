import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProductsComponent } from './list-products/list-products.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { ViewTaskComponent } from './view-task/view-task.component';

const routes: Routes = [
  {path: '', component: ListProductsComponent},
  {path: 'view/:id', component: ViewProductComponent},
  {path: 'tasks', component: ListTasksComponent},
  {path: 'tasks/:id', component: ViewTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
