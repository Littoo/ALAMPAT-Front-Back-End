import { Component, OnInit } from '@angular/core';
import axios from 'axios'
import { AccountService } from 'src/app/services/user';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-myaccountseller',
  templateUrl: './myaccountseller.component.html',
  styleUrls: ['./myaccountseller.component.css']
})
export class MyaccountsellerComponent implements OnInit {
  showEditAccountSellerModal: boolean = false;
  user: any;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.getUserdata().then(userData => this.user = userData)
    console.log(this.user)
  }

  onClickEditAccountSeller = () => {
    this.showEditAccountSellerModal = !this.showEditAccountSellerModal;
  }
}
