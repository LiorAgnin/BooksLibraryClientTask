import { Routes } from '@angular/router';
import { BooksComponent } from './components/books/books.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'books' },
    { path: 'books', component: BooksComponent },
    { path: '**', redirectTo: '/404' }
];