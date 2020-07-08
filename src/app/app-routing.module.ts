import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodosComponent} from './component/todos/todos.component';
import {ArchiveComponent} from './component/archive/archive.component';


const routes: Routes = [
  {path: 'todos', component: TodosComponent},
  {path: 'archive', component: ArchiveComponent},
  {path: '', pathMatch: 'full', redirectTo: 'todos'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
