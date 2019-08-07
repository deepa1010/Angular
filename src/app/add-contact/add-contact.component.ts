import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactService } from '../services/contact.service';
import { Router, ActivatedRoute } from '@angular/router';
import { routerNgProbeToken} from '@angular/router/src/router_module';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  contact: Contact;
  isNew : boolean;

  constructor( private  cs: ContactService, private actRoute : ActivatedRoute, private router: Router) { }

  ngOnInit() {

this.actRoute.params.subscribe(

   (params) => {let id = params.contactId;
      if(id){

   this.isNew = false;
   this.cs.getById(id).subscribe(
    (data) => {this.contact=data;
    }
   );
  }else{
    this.isNew= true;
    this.contact = new Contact();
  }
  }
);
  }


  add(){
    if(this.isNew){
    this.cs.add(this.contact).subscribe(
      () =>{}
    );
  }
  else{
    this.cs.updateContact(this.contact).subscribe(()=>{});
  }
  this.router.navigateByUrl("/list");
}
}
