import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TodosComponent} from './component/todos/todos.component';
import {HeaderComponent} from './component/header/header.component';
import {AddTodoComponent} from './component/add-todo/add-todo.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ArchiveComponent } from './component/archive/archive.component';



@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    HeaderComponent,
    AddTodoComponent,
    ArchiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
