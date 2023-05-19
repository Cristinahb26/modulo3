import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

      public books: Book[];

      constructor(public bookService: BooksService) {
      
        this.books =this.bookService.getAll();
        
      } 

      borrarCard(titleBook:string):void{

        this.books = this.books.filter(Book => Book.title != titleBook);
      }

}
