import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { BooksServiceService } from "../../services/books-service.service";
import { Books } from "../../models/books";

@Component({
  selector: 'edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  @Input() book: Books = <Books>{};
  @Output() onClickEdit = new EventEmitter<Books>();
  constructor(private booksService: BooksServiceService) { }
  editBook(editForm: any) {
    this.onClickEdit.emit(this.book);
  }
  ngOnInit() {
  }
}
