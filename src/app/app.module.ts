import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ListContactComponent } from './list-contact/list-contact.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { DeleteContactComponent } from './delete-contact/delete-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashBoardComponent,
    ListContactComponent,
    AddContactComponent,
    HomeComponent,
    DeleteContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
