import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-editaccountseller',
  templateUrl: './editaccountseller.component.html',
  styleUrls: ['./editaccountseller.component.css']
})
export class EditaccountsellerComponent implements OnInit {
  @Input() openEditAccountSellerModal: boolean = false;
  submitted: boolean = false;
  editAccountSellerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.editAccountSellerForm = this.formBuilder.group ({
      profilePhoto: [Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      sellerDescription: ['', Validators.required],
    });
  }
  get formControls() { return this.editAccountSellerForm.controls; }

  onClickChangePhoto = () => {
    //insert code here to open file explorer
  }

  onClickSave = () => {
    this.submitted = true;  
  }

  onClickExit = () => {
    this.openEditAccountSellerModal = false;
    this.submitted = false;
    this.editAccountSellerForm.reset();
  }

  editAccountSeller = async () => {
    console.log(this.editAccountSellerForm.value);
    this.submitted = true;
    if(this.editAccountSellerForm.invalid){
      return;
    }
    //this.userService.login(this.loginForm.value);
  }

}
