import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

      public books: Book[];

      constructor() {

        this.books = [

          new Book(1, 0, "A través de mi ventana", "Tapa Blanda", "Ariana Godoy", 10.50, "https://m.media-amazon.com/images/I/91WfllucCFL.jpg"),
          new Book(2, 0, "El ocho", "Tapa Blanda", "Katherine Neville", 13.99, "https://m.media-amazon.com/images/I/519Ic2UH9oL.jpg"),
          new Book(3, 0, "El fuego", "Tapa Blanda", "Katherine Neville", 10.40, "https://quelibroleo.com/images/libros/libro_1353813418.jpg"),
         
        ]
      }

      agregarBook(id_book:number, title:string, type:string, author:string, price:number, photo:string) {

        let newBook = new Book(id_book, 0, title, type, author, price, photo)
        this.books.push(newBook);

      } 

}
