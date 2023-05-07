import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  public user:User;

  constructor(){

    this.user = new User(1, 'Jazlin', 'Bravo Palencia', 'jazlinBP@gmail.com', 'https://i.pinimg.com/236x/c7/51/de/c751dec74534f4fb755357ff3775572e.jpg', 'jazlin1234');
    
  }

  public enviar(name:string, last_name:string, email:string, photo:string){

    this.user.name = name;
    this.user.last_name = last_name;
    this.user.email = email;
    this.user.photo = photo;

  }

}
