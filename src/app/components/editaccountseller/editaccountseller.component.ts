import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
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

  constructor(private formBuilder: FormBuilder, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
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
