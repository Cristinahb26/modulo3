import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() book: Book;
  @Input() even: boolean;
  @Output() titleBook = new EventEmitter <string>();

  enviarBook():void{
  this.titleBook.emit(this.book.title)

}
}

