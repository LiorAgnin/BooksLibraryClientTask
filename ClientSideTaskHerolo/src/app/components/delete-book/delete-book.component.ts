import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {
  yesBtn: string = "Yes";
  noBtn: string = "No";
  @Output() yesOrNot = new EventEmitter<string>();
  constructor() { }
  popupHandler(yesOrNot: string) {
    console.log(yesOrNot);
    this.yesOrNot.emit(yesOrNot);
  }
  ngOnInit() {
  }

}
