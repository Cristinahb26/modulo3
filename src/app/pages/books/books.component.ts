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
  
      getOne(id_book:number){
        
        if (id_book){
          this.books = [this.bookService.getOne(id_book)];

        }else{
          this.books = this.bookService.getAll();
           
        }
      }

      delete(id_book:number):void{
        this.bookService.delete(id_book);  
        console.log(this.delete);
         
      }
}
