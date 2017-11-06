import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BooksServiceService } from "../../services/books-service.service";
import { Books } from "../../models/books";

@Component({
  selector: 'add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  bookToAdd: Books = <Books>{};
  @Output() onClickForm = new EventEmitter<Books>();
  constructor() { }
  ngOnInit() {
  }
  submitHandler(myNgForm: any) {
    this.onClickForm.emit(this.bookToAdd);
  }
}
