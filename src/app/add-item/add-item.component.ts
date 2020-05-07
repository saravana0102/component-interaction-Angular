import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.less']
})
export class AddItemComponent implements OnInit {
  @Output() addedItem = new EventEmitter<{itemName:string,itemDesc:string}>();
  itemName : string;
  itemDesc : string;
  ngOnInit(){
    
  }
  addItem(){
    this.addedItem.emit({itemName:this.itemName,itemDesc:this.itemDesc});
  }
}