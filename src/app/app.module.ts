import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TodosComponent} from './component/todos/todos.component';
import {HeaderComponent} from './component/header/header.component';
import {AddTodoComponent} from './component/add-todo/add-todo.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ArchiveComponent } from './component/archive/archive.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DatePickerComponent } from './component/date-picker/date-picker.component';


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    HeaderComponent,
    AddTodoComponent,
    ArchiveComponent,
    DatePickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
