import { Component, OnInit } from '@angular/core';
import { User, UserType } from '../models/User';
import { UserService } from '../services/auth'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  showSignUp: boolean = false;
  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

  onSubmit = () => {
    //sample signup. change when forms are available
    const sampleUser: User = {
      name: "Lito",
      email: "lito@test.com",
      phoneNumber: "09493511121",
      address: "Local Address",
      password: "helloworld",
      userType: UserType.SELLER
    }
    this.userService.registerUser(sampleUser);
  }

  onClickSignUp = () => {
    this.showSignUp = !this.showSignUp;
  }
  onClickExit = () => {
    this.onClickSignUp();
  }

}
