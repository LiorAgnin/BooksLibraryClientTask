import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { DeleteBookComponent } from './components/delete-book/delete-book.component';
import { BooksComponent } from './components/books/books.component';

import { BooksServiceService } from "./services/books-service.service";
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './app.routers';
import { TitleFilterPipe } from './pipes/title-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    EditBookComponent,
    DeleteBookComponent,
    BooksComponent,
    TitleFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
   RouterModule.forRoot(routes)
  ],
  providers: [BooksServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
