import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private books: Book[]

  constructor() {

    this.books = [

      new Book("A través de mi ventana", "Tapa Blanda", "Ariana Godoy", 10.50, "https://m.media-amazon.com/images/I/91WfllucCFL.jpg", 1, 0),
      new Book("El ocho", "Tapa Blanda", "Katherine Neville", 13.99, "https://m.media-amazon.com/images/I/519Ic2UH9oL.jpg", 2, 0),
      new Book("El fuego", "Tapa Blanda", "Katherine Neville", 10.40, "https://quelibroleo.com/images/libros/libro_1353813418.jpg", 3, 0),
     
    ]
   }
   
   agregarBook(title:string, type:string, author:string, price:number, photo:string, id_book:number) {

    let newBook = new Book(title, type, author, price, photo, id_book);
    this.books.push(newBook);

  }

   getAll(): Book[]{
      return this.books;
   }

   getOne(id_book: number): Book {
     
    return this.books.find(Book => id_book === id_book);

   }
}
