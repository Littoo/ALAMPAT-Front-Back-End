import { Component, OnInit } from '@angular/core';
import axios from 'axios'
import { AccountService } from 'src/app/services/user';
import { Observable } from 'rxjs';
import { User } from '../../models/User'
import { DomSanitizer } from '@angular/platform-browser';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

const localAPI = 'http://localhost:3000'

@Component({
  selector: 'app-myaccountseller',
  templateUrl: './myaccountseller.component.html',
  styleUrls: ['./myaccountseller.component.css']
})

export class MyaccountsellerComponent implements OnInit {
  showEditAccountSellerModal: boolean = false;
  user:  any;
  image64 : any;
  public imageSRC: string = '';
  userID: string = '607fe491958fa65f08f14d0e';

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    axios.get(`${localAPI}/users/profile/` + this.userID)
    .then(resp => {
        this.user = resp.data.userData
        this.imageSRC = `data:${this.user.profileImage?.contentType};base64,${this.user.profileImage?.imageBase64}`
        console.log("Hi"+JSON.stringify(this.user));
    })
    .catch(err => {
        // Handle Error Here
        console.error(err);
    });

    /*this.accountService.getUserdata().then(userData  => 
      this.user = userData 
      )
    this.image64 = this.domSanitizer.bypassSecurityTrustUrl(this.user.profileImage?.imageBase64);
    this.imageSRC = 'data:'+ this.user.profileImage?.contentType +';base64,' + this.image64
    console.log("User image: " + JSON.stringify(this.imageSRC))*/
  }

  onClickEditAccountSeller = () => {
    this.showEditAccountSellerModal = !this.showEditAccountSellerModal;
  }
}
