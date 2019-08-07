import { Injectable } from '@angular/core';
import {Contact} from '../models/contact';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contactList : Contact[];
  contactList2 : Contact[];
  contact : Contact;

  constructor() { 

    this.contactList =[
         {contactId:1, name:'saranya', mobileNumber :8019278881, emaiId:'srisaranyavasamsetti@gmail.com'},
         {contactId:2, name:'vamsi', mobileNumber :86393328157, emaiId:'vamsikoppisetti@gmail.com'},
         {contactId:3, name:'aditya', mobileNumber :8014527881, emaiId:'aditya@gmail.com'}
    ];

  }

getAll():Observable<Contact[]>{
  return new Observable(
    (observer)=>{
    observer.next(this.contactList);
    observer.complete();
});

}
add(contact : Contact):Observable<any>{
  return new Observable(
    (observer) => {
      this.contactList.push(contact);
      observer.complete();
    }
  )
}


remove(contact : Contact):Observable<any>{
  return new Observable(
    (obse) => {
    var index = this.contactList.indexOf(contact);
    if (index > -1) {
      this.contactList.splice(index, 1);
    }
      obse.complete();
    }    
  )
}




updateContact(contact : Contact):Observable<Contact>{
  let result : Observable<Contact> = new  Observable(
    (observer)=>{
      //let id = contact.contactId;
      this.contactList.splice(this.contactList.indexOf(contact),1);
      this.contactList.push(contact);
      observer.complete();
    }
  )
  return result;
}


getById(contactId : number): Observable<Contact>{
  return new Observable(
    (observer) => {
      //console.log(this.contact)
      observer.next(this.contactList.find( i => i.contactId ==contactId));
            observer.complete();
    }
  )
}
}

