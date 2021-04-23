import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-editaccountbuyer',
  templateUrl: './editaccountbuyer.component.html',
  styleUrls: ['./editaccountbuyer.component.css']
})
export class EditaccountbuyerComponent implements OnInit {
  @Input() openEditAccountBuyerModal: boolean = false;
  submitted: boolean = false;
  editAccountBuyerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.editAccountBuyerForm = this.formBuilder.group ({
      profilePhoto: [Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required],
    });
  }
  get formControls() { return this.editAccountBuyerForm.controls; }

  onClickChangePhoto = () => {
    //insert code here to open file explorer
  }

  onClickSave = () => {
    this.submitted = true;  
  }

  onClickExit = () => {
    this.openEditAccountBuyerModal = false;
    this.submitted = false;
    this.editAccountBuyerForm.reset();
  }

  editAccountBuyer = async () => {
    console.log(this.editAccountBuyerForm.value);
    this.submitted = true;
    if(this.editAccountBuyerForm.invalid){
      return;
    }
    //this.userService.login(this.loginForm.value);
  }

}