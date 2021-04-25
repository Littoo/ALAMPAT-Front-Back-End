import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import axios from 'axios';
import { DomSanitizer } from '@angular/platform-browser';
import { User } from '../../models/User'

interface Account {
  message: string, 
  success: boolean,
  userData: User
}

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


  user: any; // = new User;
  string64: any;
  filetype: any;
  public imageSRC : any
  userID: string = '607fe491958fa65f08f14d0e';

  constructor(private formBuilder: FormBuilder, private cd: ChangeDetectorRef, private domSanitizer: DomSanitizer) { 
    
  }

  ngOnInit(): void {

    //getting and displaying the data of the  logged in user by UserId
    axios.get(`${localAPI}/users/profile/` + this.userID)
    .then(resp => {
        this.user = resp.data.userData 

        this.initForm()

        //replace this when frontend is integrated to backend since it will be saved in one string
        this.imageSRC = `data:${this.user.profileImage?.contentType};base64,${this.user.profileImage?.imageBase64}`

        // /console.log("user data: "+ JSON.stringify(this.user));
    })
    .catch(err => {
        // Handle Error Here
        console.error(err);
    });
    
    this.editAccountSellerForm = this.formBuilder.group ({
      profileImage: this.formBuilder.group({
        filename: [''],
        contentType: [''],
        imageBase64:[''],
      }),
      name: [''],
      email: [''],
      password: [''],
      phoneNumber: [''],
      sellerDescription: [''],
    });
    
   
    
    //console.log("Initial Seller Form Data: " + JSON.stringify( this.editAccountSellerForm.value));
  }

  get formControls() { return this.editAccountSellerForm.controls; }

  onClickChangePhoto = (event: Event) => {
    const reader = new FileReader();
    const target= event.target as HTMLInputElement;

    if(target.files && target.files.length) {
      const file: File = (target.files as FileList)[0];
      this.filetype =this.domSanitizer.bypassSecurityTrustUrl(file.type)
      reader.readAsDataURL(file);
  
      reader.onload = () => {
        this.string64 = reader.result
        this.imageSRC = this.domSanitizer.bypassSecurityTrustUrl(this.string64);
        console.log("Hello" + reader.result)
        this.editAccountSellerForm.patchValue({
          profileImage:{
          filename: file.name,
          contentType: file.type,
          imageBase64: reader.result as string
          }
       });
      
        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
      };
    }
  }

  onClickSave = () => {
    
    console.log("Seller Form Data: " + JSON.stringify(this.editAccountSellerForm.value));
    this.submitted = true;  
  }

  onClickExit = () => {
    this.openEditAccountSellerModal = false;
    this.submitted = false;
    this.initForm()
  }

  initForm = () => {
    this.editAccountSellerForm.reset({
      name: this.user?.name,
      email: this.user?.email,
      password: this.user?.password,
      phoneNumber: this.user?.phoneNumber,
      profileImage:{
        filename: this.user?.profileImage.filename,
        contentType: this.user?.profileImage.contentType,
        imageBase64: this.user?.profileImage.imageBase64
        }
      });
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
