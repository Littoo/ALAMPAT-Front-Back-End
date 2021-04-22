import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-editaccountseller',
  templateUrl: './editaccountseller.component.html',
  styleUrls: ['./editaccountseller.component.css']
})
export class EditaccountsellerComponent implements OnInit {
  @Input() openEditAccountSellerModal: boolean = false;
  submitted: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  
  onClickSave = () => {
    // inser something here to save changes
    this.openEditAccountSellerModal = false;
  }

  onClickExit = () => {
    this.openEditAccountSellerModal = false;
  }

}
