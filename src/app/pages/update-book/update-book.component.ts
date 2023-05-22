import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {

  public books: Book[];

  constructor(public bookService: BooksService, public router:Router) {
  
    this.books =this.bookService.getAll();
    
  } 
  edit(title:string, type:string, author:string, price:number, photo:string, id_book:number):void{

    let book = new Book (title, type, author, price, photo, id_book,0)
    this.bookService.edit(book);
    this.router.navigate(['/books']);
  
  }
}
