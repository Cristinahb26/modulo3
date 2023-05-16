import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() book: Book;
  @Output() titleBook = new EventEmitter <string>();

  enviarBook():void{
  this.titleBook.emit(this.book.title)

}
}

