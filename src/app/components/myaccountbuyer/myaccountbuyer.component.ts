import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myaccountbuyer',
  templateUrl: './myaccountbuyer.component.html',
  styleUrls: ['./myaccountbuyer.component.css']
})
export class MyaccountbuyerComponent implements OnInit {
  showEditAccountBuyerModal: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClickEditAccountBuyer = () => {
    this.showEditAccountBuyerModal = !this.showEditAccountBuyerModal;
  }
}
