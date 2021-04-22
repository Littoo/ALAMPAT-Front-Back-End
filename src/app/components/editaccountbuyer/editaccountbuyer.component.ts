import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-editaccountbuyer',
  templateUrl: './editaccountbuyer.component.html',
  styleUrls: ['./editaccountbuyer.component.css']
})
export class EditaccountbuyerComponent implements OnInit {
  @Input() openEditAccountBuyerModal: boolean = false;
  submitted: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  
  onClickSave = () => {
    // inser something here to save changes
    this.openEditAccountBuyerModal = false;
  }

  onClickExit = () => {
    this.openEditAccountBuyerModal = false;
  }

}