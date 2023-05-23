export class Book {
  static id_book(id_book: any): Book {
    throw new Error('Method not implemented.');
  }

           public title: string;
           public type: string;
           public author: string;
           public price: number;
           public photo: string;
           public id_book:number=0;
           public  id_user:number =0;
  id_libro: number;
  length: number;
  id: number;

       
    constructor(title: string, type: string, author: string, price: number, photo: string, id_book:number=0, id_user:number=0){

        this.title=title;
        this.type= type;
        this.author= author;
        this.price= price;
        this.photo=photo;
        this.id_book=id_book;
        this.id_user=id_user;
          
  }  

}
