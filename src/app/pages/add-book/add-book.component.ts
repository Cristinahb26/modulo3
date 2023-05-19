import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

   constructor(public bookService: BooksService, private router:Router){}

    agregarBook(title:string, type:string, author:string, price:number, photo:string, id_book:number): void{

      this.bookService.agregarBook(new Book(title, type, author, price, photo, id_book));
      this.router.navigate(['/book']);
    }

}
