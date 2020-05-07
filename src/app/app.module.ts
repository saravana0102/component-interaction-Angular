import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AddItemComponent } from "./add-item/add-item.component";
import { ViewItemComponent } from "./view-item/view-item.component";
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,AddItemComponent,ViewItemComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
