import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ListContactComponent } from './list-contact/list-contact.component';
import { DeleteContactComponent } from './delete-contact/delete-contact.component';

const routes: Routes = [
{path :"",component:HomeComponent,pathMatch :'full' },
{path : "add", component:AddContactComponent},
{path: "list", component:ListContactComponent},
{path : "edit/:contactId", component:AddContactComponent},
{path : "delete/:contactId", component:DeleteContactComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
