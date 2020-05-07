import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'User';
  itemDetails = [];

  onAddItem(event){
    this.itemDetails.push({"itemName":event.itemName,
      "itemDesc":event.itemDesc});
    console.log(this.itemDetails);
  }
}
