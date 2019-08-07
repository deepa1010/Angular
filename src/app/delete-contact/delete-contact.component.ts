import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { routerNgProbeToken} from '@angular/router/src/router_module';
import { ContactService } from '../services/contact.service';
import { Contact } from '../models/contact';


@Component({
  selector: 'app-delete-contact',
  templateUrl: './delete-contact.component.html',
  styleUrls: ['./delete-contact.component.css']
})
export class DeleteContactComponent implements OnInit {

  
  contact: Contact;
  isNew : boolean;



  constructor(private  cs: ContactService, private actRoute : ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.actRoute.params.subscribe(
    
      (params) => {let id = params.contactId;
      if(id){
       this.isNew = true;
       this.cs.getById(id).subscribe(
        (data) => {this.contact=data;
        }
       );
    
      }else{
        
    
      }
      }
    );
    
      
       
    console.log(this.isNew);
      }

      
    
      delete(){
        if(this.isNew){
        this.cs.remove(this.contact).subscribe(
          () =>{});
      }
      this.router.navigateByUrl("/list");

    }
    
    
}
