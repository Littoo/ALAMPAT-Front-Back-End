import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import axios from 'axios';


const localAPI = 'http://localhost:3000'

@Component({
  selector: 'app-editaccountseller',
  templateUrl: './editaccountseller.component.html',
  styleUrls: ['./editaccountseller.component.css']
})
export class EditaccountsellerComponent implements OnInit {
  @Input() openEditAccountSellerModal: boolean = false;
  submitted: boolean = false;
  editAccountSellerForm: FormGroup;

  user:  any;
  public imageSRC: string = '';
  userID: string = '607fe491958fa65f08f14d0e';

  constructor(private formBuilder: FormBuilder, private cd: ChangeDetectorRef,) { }

  ngOnInit(): void {

    //getting and displaying the data of the  logged in user by UserId
    axios.get(`${localAPI}/users/profile/` + this.userID)
    .then(resp => {
        this.user = resp.data.userData
        this.imageSRC = `data:${this.user.profileImage?.contentType};base64,${this.user.profileImage?.imageBase64}`
        console.log("user data: "+ JSON.stringify(this.user));
    })
    .catch(err => {
        // Handle Error Here
        console.error(err);
    });

    this.editAccountSellerForm = this.formBuilder.group ({
      profileImage:[ null ],
      name: [''],
      email: [''],
      password: [''],
      phoneNumber: [''],
      sellerDescription: [''],
      
    });
  }
  get formControls() { return this.editAccountSellerForm.controls; }

  onClickChangePhoto = (event: Event) => {
    const reader = new FileReader();
    const target= event.target as HTMLInputElement;

    if(target.files && target.files.length) {
      const file: File = (target.files as FileList)[0];
      reader.readAsDataURL(file);
  
      reader.onload = () => {
        this.editAccountSellerForm.patchValue({
          file: reader.result
       });
      
        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
      };
    }
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
