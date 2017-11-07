import { Component, OnInit } from '@angular/core';
import { BooksServiceService } from "../../services/books-service.service";
import { Books } from "../../models/books";
import { BooksStatus } from '../../books-status.enum';
import { TitleFilterPipe } from '../../pipes/title-filter.pipe';

@Component({
  selector: 'books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  arrBooks: Books[];
  bookToDelete: Books;
  bookToEdit: Books;
  bookStatus: BooksStatus = BooksStatus.ShowBooks;
  messeges: string;
  send: boolean = false;

  constructor(private booksService: BooksServiceService) { }
  ngOnInit() {
    this.booksService.getBooks().subscribe(books => {
      this.arrBooks = books;
    });
  }
  IsShowBooksStatus() {
    return (this.bookStatus == BooksStatus.ShowBooks);
  }
  IsAddBooksStatus() {
    return (this.bookStatus == BooksStatus.AddBooks);
  }
  IsEditBooksStatus() {
    return (this.bookStatus == BooksStatus.EditBooks);
  }
  showBooks() {
    this.bookStatus = BooksStatus.ShowBooks
  }
  deleteBook(bookToDelete: Books) {
    this.bookToDelete = bookToDelete;
  }
  editBook(bookToEdit: Books) {
    this.bookToEdit = bookToEdit;
    this.bookStatus = BooksStatus.EditBooks;
  }
  userClickHandler() {
    this.bookStatus = BooksStatus.AddBooks;
  }
  yesOrNotCather($event: string) {
    if ($event == "Yes") {
      this.deleteBookHandler();
    }
  }
  addBookHandler(event: Books) {
    if (!this.checkIfBookExist(event)) {
      const bookToAdd = {
        "Autuor": event.Autuor,
        "Date": event.Date,
        "Title": event.Title,
        "Image": event.Image,
      }
      this.arrBooks.push(event);
      const req = this.booksService.Post(bookToAdd);
      req.subscribe(posts => {
      },
        (err) => {
          console.log(err)

        });
      this.bookStatus = BooksStatus.ShowBooks;
      this.messeges = "Add Success";
      this.saveTodos();
    } else {
      window.alert("Book title already exist. Please change the title");
    }
  }
  deleteBookHandler() {
    let index = this.arrBooks.indexOf(this.bookToDelete);
    this.arrBooks.splice(index, 1);
    this.messeges = "Book deleted succsesfully";
    this.saveTodos();

    const req = this.booksService.Delete(index + 1);
    req.subscribe(response => {
      console.log("succses ", response)
    }
      , (error) => {
        console.log(error);
      });
  }
  editBookHandler(event: Books) {
    if (!this.checkIfBookExist(event)) {
      const bookToEdit = {
        "Id": event.Id,
        "Autuor": event.Autuor,
        "Date": event.Date,
        "Title": event.Title,
        "Image": event.Image,
      }
      let bookToEditIndex = this.arrBooks.indexOf(event);
      this.arrBooks[bookToEditIndex] = event;
      const req = this.booksService.Put(bookToEdit);
      req.subscribe(book => {
        console.log(book);
      },
        (err) => {
        });
      this.bookStatus = BooksStatus.ShowBooks;
      this.messeges = "Edit Succeeded";
      this.saveTodos();
    }
    else {
      window.alert("Book title already exist. Please change the title");
    }
  }
  checkIfBookExist(bookExist: Books): boolean {
    let isExist = false;
    let titleIndex = this.arrBooks.indexOf(bookExist);
    for (var index = 0; index < this.arrBooks.length; index++) {
      if (index == titleIndex) continue;
      if (this.arrBooks[index].Title.toLocaleLowerCase() === bookExist.Title.toLocaleLowerCase()) {
        isExist = true;
        break;
      }
    }
    return isExist;
  }
  saveTodos(): void {
    this.send = true;
    setTimeout(function () {
      this.send = false;
      this.formhiden = true;
    }.bind(this), 2000);
  }
}
