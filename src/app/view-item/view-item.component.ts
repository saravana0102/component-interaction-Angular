import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.less']
})
export class ViewItemComponent implements OnInit {
  @Input() items : {itemName:string,itemDesc:string};
  constructor(){
    console.log(this.items);
  }
  ngOnInit(){
    
  }
}