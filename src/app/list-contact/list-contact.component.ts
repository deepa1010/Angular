import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact} from '../models/contact';
@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css']
})
export class ListContactComponent implements OnInit {

  contactList : Contact[];
  contactList2 : Contact[];
 size : number;
  constructor( private cs:ContactService) {
   }

  ngOnInit() {
    this.cs.getAll().subscribe(
    (data) =>{ this.contactList = data; 
    this.size= this.contactList.length;} );

  }

}
